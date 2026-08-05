export type Highlight = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  href: string;
  linkLabel: string;
};

export const HIGHLIGHT_INTERVAL_MS = 5000;

export const highlights: Highlight[] = [
  {
    id: 'research-programme',
    eyebrow: 'Research programme',
    title: 'Computational Mathematics for Planetary Mantle Dynamics',
    summary:
      'Numerical PDEs, scientific computing, and high-performance simulation of mantle convection and planetary interiors.',
    image: '/convection-cells.png',
    imageWidth: 1200,
    imageHeight: 900,
    imageAlt:
      'Conceptual temperature field in a half-annular mantle domain with alternating warm upwellings and cool downwellings.',
    href: '/research/',
    linkLabel: 'Explore our research',
  },
  {
    id: 'super-earths',
    eyebrow: 'Featured project',
    title: 'Computational Modelling of Mantle Convection in Super-Earths',
    summary:
      'Nonlinear PDE models connect compressible mantle flow, variable material properties, and planetary-scale heat transport.',
    image: '/images/homepage/01-super-earth-mantle-convection.webp',
    imageWidth: 1599,
    imageHeight: 900,
    imageAlt:
      'Conceptual cutaway of a rocky planet showing layered structure and circulating patterns within the mantle.',
    href: '/projects/#mantle-convection',
    linkLabel: 'View the featured project',
  },
  {
    id: 'scientific-ml',
    eyebrow: 'PhD research · Adil Hussain',
    title: 'Computational and Machine-Learning Approaches to Mantle Dynamics',
    summary:
      'Developing computational and scientific-machine-learning methods for mantle dynamics in planetary bodies.',
    image: '/images/homepage/05-scientific-ml-mantle-dynamics.webp',
    imageWidth: 1599,
    imageHeight: 900,
    imageAlt:
      'Conceptual composition linking a gridded temperature field and a network representation to flow inside a planetary mantle.',
    href: '/people/',
    linkLabel: 'Meet the research group',
  },
  {
    id: 'cylindrical-convection',
    eyebrow: 'MS research · Tamanna Rehman',
    title: 'Compressible Mantle Convection in Cylindrical Geometry',
    summary:
      'Numerical study of buoyancy forcing and viscosity contrast using the truncated anelastic liquid approximation.',
    image: '/images/homepage/02-cylindrical-mantle-simulation.webp',
    imageWidth: 1599,
    imageHeight: 900,
    imageAlt:
      'Conceptual annular mantle domain with a computational grid, streamlines, warm upwellings, and cool downwellings.',
    href: '/people/',
    linkLabel: 'Read about current researchers',
  },
  {
    id: 'mantle-lithosphere',
    eyebrow: 'Research theme',
    title: 'Mantle Convection and Geodynamics',
    summary:
      'Computational models investigate how convective transport within rocky planets interacts with their overlying lithosphere.',
    image: '/images/homepage/04-mantle-lithosphere-interaction.webp',
    imageWidth: 1599,
    imageHeight: 900,
    imageAlt:
      'Conceptual cross-section of warm mantle upwelling beneath a separating rocky lithosphere.',
    href: '/research/#geodynamics',
    linkLabel: 'Explore geodynamics research',
  },
  {
    id: 'verification',
    eyebrow: 'MS research · Lubna Fazal',
    title: 'Model Verification for Mantle-Convection Simulations',
    summary:
      'Analytical solutions for canonical mantle-convection configurations provide benchmarks for computational models.',
    image: '/images/homepage/03-numerical-pde-scientific-computing.webp',
    imageWidth: 1599,
    imageHeight: 900,
    imageAlt:
      'Conceptual scientific-computing visualization with a curved grid, streamlines, and a circular boundary.',
    href: '/people/',
    linkLabel: 'Read about current researchers',
  },
];
