import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const width = 1200;
const height = 900;
const cx = 600;
const cy = 760;
const innerRadius = 250;
const outerRadius = 500;
const radialSteps = 52;
const angularSteps = 176;
const cells = 4;

const palette = [
  [0, [31, 67, 93]],
  [0.25, [49, 105, 121]],
  [0.48, [90, 145, 137]],
  [0.66, [215, 185, 127]],
  [0.84, [198, 113, 77]],
  [1, [145, 57, 43]],
];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const point = (radius, theta) => [cx + radius * Math.cos(theta), cy - radius * Math.sin(theta)];

function colour(value) {
  const t = clamp(value, 0, 1);
  const upper = palette.findIndex(([stop]) => stop >= t);
  if (upper <= 0) return `rgb(${palette[0][1].join(' ')})`;
  const [aStop, a] = palette[upper - 1];
  const [bStop, b] = palette[upper];
  const mix = (t - aStop) / (bStop - aStop);
  const rgb = a.map((channel, index) => Math.round(channel + (b[index] - channel) * mix));
  return `rgb(${rgb.join(' ')})`;
}

function temperature(q, theta) {
  const conductive = 1 - q;
  const convective = 0.31 * Math.cos(cells * theta) * Math.sin(Math.PI * q);
  const boundaryLayer = 0.045 * Math.sin(2 * cells * theta) * Math.sin(2 * Math.PI * q);
  return clamp(conductive + convective + boundaryLayer, 0, 1);
}

function velocity(x, y) {
  const dx = x - cx;
  const dy = cy - y;
  const radius = Math.hypot(dx, dy);
  if (radius <= innerRadius + 2 || radius >= outerRadius - 2 || dy < 0) return null;
  const theta = Math.atan2(dy, dx);
  const q = (radius - innerRadius) / (outerRadius - innerRadius);
  const radial = (cells / radius) * Math.sin(Math.PI * q) * Math.cos(cells * theta);
  const tangential =
    (-Math.PI / (outerRadius - innerRadius)) * Math.cos(Math.PI * q) * Math.sin(cells * theta);
  const ux = radial * Math.cos(theta) - tangential * Math.sin(theta);
  const uy = -(radial * Math.sin(theta) + tangential * Math.cos(theta));
  const magnitude = Math.hypot(ux, uy);
  return magnitude > 1e-8 ? [ux / magnitude, uy / magnitude] : null;
}

function trace(seed, direction) {
  const path = [seed];
  let [x, y] = seed;
  for (let i = 0; i < 1200; i += 1) {
    const v1 = velocity(x, y);
    if (!v1) break;
    const step = 1.65 * direction;
    const midX = x + v1[0] * step * 0.5;
    const midY = y + v1[1] * step * 0.5;
    const v2 = velocity(midX, midY) ?? v1;
    x += v2[0] * step;
    y += v2[1] * step;
    if (!velocity(x, y)) break;
    path.push([x, y]);
    if (i > 120 && Math.hypot(x - seed[0], y - seed[1]) < 3.2) break;
  }
  return path;
}

function streamline(seed) {
  const backward = trace(seed, -1).reverse();
  const forward = trace(seed, 1);
  return [...backward.slice(0, -1), ...forward];
}

function polyline(points) {
  return points
    .map(([x, y], index) => `${index === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join('');
}

const field = [];
for (let radial = 0; radial < radialSteps; radial += 1) {
  const q0 = radial / radialSteps;
  const q1 = (radial + 1) / radialSteps;
  const r0 = innerRadius + q0 * (outerRadius - innerRadius);
  const r1 = innerRadius + q1 * (outerRadius - innerRadius);
  for (let angular = 0; angular < angularSteps; angular += 1) {
    const t0 = (angular / angularSteps) * Math.PI;
    const t1 = ((angular + 1) / angularSteps) * Math.PI;
    const corners = [point(r0, t0), point(r1, t0), point(r1, t1), point(r0, t1)];
    const fill = colour(temperature((q0 + q1) / 2, (t0 + t1) / 2));
    field.push(`<path d="${polyline([...corners, corners[0]])}Z" fill="${fill}"/>`);
  }
}

const mesh = [];
for (let radial = 0; radial <= 5; radial += 1) {
  const radius = innerRadius + (radial / 5) * (outerRadius - innerRadius);
  const [leftX] = point(radius, Math.PI);
  mesh.push(
    `<path d="M${leftX.toFixed(1)} ${cy}A${radius} ${radius} 0 0 1 ${(cx + radius).toFixed(1)} ${cy}"/>`,
  );
}
for (let angular = 0; angular <= 16; angular += 1) {
  const theta = (angular / 16) * Math.PI;
  const start = point(innerRadius, theta);
  const end = point(outerRadius, theta);
  mesh.push(
    `<path d="M${start[0].toFixed(1)} ${start[1].toFixed(1)}L${end[0].toFixed(1)} ${end[1].toFixed(1)}"/>`,
  );
}

const flowLines = [];
const arrows = [];
for (let cell = 0; cell < cells; cell += 1) {
  const centerTheta = ((cell + 0.5) / cells) * Math.PI;
  for (const q of [0.08, 0.18, 0.32]) {
    const seed = point(innerRadius + q * (outerRadius - innerRadius), centerTheta + 0.045);
    const points = streamline(seed);
    if (points.length < 60) continue;
    flowLines.push(`<path d="${polyline(points)}"/>`);
    if (q === 0.18) {
      const index = Math.floor(points.length * 0.58);
      const [x, y] = points[index];
      const [previousX, previousY] = points[Math.max(0, index - 4)];
      const angle = (Math.atan2(y - previousY, x - previousX) * 180) / Math.PI;
      arrows.push(
        `<path d="M-8 -5L7 0L-8 5Z" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${angle.toFixed(1)})"/>`,
      );
    }
  }
}

const outerLeft = point(outerRadius, Math.PI);
const innerLeft = point(innerRadius, Math.PI);
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="150%">
      <feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#020a12" flood-opacity=".34"/>
    </filter>
    <linearGradient id="legend" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#1f435d"/><stop offset=".5" stop-color="#5a9189"/>
      <stop offset=".7" stop-color="#d7b97f"/><stop offset="1" stop-color="#91392b"/>
    </linearGradient>
  </defs>
  <g filter="url(#shadow)">
    ${field.join('')}
    <g fill="none" stroke="#e7f0f1" stroke-width="1.2" stroke-opacity=".16">${mesh.join('')}</g>
    <path d="M${outerLeft[0]} ${cy}A${outerRadius} ${outerRadius} 0 0 1 ${cx + outerRadius} ${cy}" fill="none" stroke="#9ec2ca" stroke-width="5"/>
    <path d="M${innerLeft[0]} ${cy}A${innerRadius} ${innerRadius} 0 0 1 ${cx + innerRadius} ${cy}" fill="none" stroke="#edb073" stroke-width="5"/>
    <g fill="none" stroke="#f5f8f7" stroke-width="2.15" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".74">${flowLines.join('')}</g>
    <g fill="#f5f8f7" fill-opacity=".86">${arrows.join('')}</g>
  </g>
  <g font-family="Arial, sans-serif" font-size="20" letter-spacing="1.2" fill="#c7d9de">
    <text x="88" y="834">COOL</text><text x="1057" y="834" text-anchor="end">WARM</text>
    <rect x="164" y="812" width="820" height="22" rx="11" fill="url(#legend)"/>
  </g>
</svg>`;

const output = fileURLToPath(new URL('../public/convection-cells.png', import.meta.url));
await sharp(Buffer.from(svg)).png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(output);
console.log('Generated public/convection-cells.png (1200 x 900).');
