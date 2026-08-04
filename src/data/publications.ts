export type PublicationTheme = 'Fluid dynamics' | 'Transport phenomena';

export type Publication = {
  year: number;
  authors: string[];
  title: string;
  journal: string;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  theme: PublicationTheme;
};

export const publications: Publication[] = [
  {
    year: 2025,
    authors: ['K. Naeem', 'Z. Ahmed', 'W. Ullah'],
    title: 'Entropy optimization of MHD nanofluid flow in porous media over a stretching surface',
    journal: 'Nonlinear Science',
    volume: '2',
    pages: '100017',
    doi: '10.1016/j.nls.2025.100017',
    theme: 'Transport phenomena',
  },
  {
    year: 2025,
    authors: ['W. Ullah', 'Z. Ahmed', 'K. Naeem'],
    title:
      'Numerical investigation of nanofluid flow over a bidirectional stretching surface in porous media',
    journal:
      'ZAMM - Journal of Applied Mathematics and Mechanics / Zeitschrift für Angewandte Mathematik und Mechanik',
    volume: '105',
    issue: '1',
    doi: '10.1002/zamm.202400709',
    theme: 'Fluid dynamics',
  },
  {
    year: 2021,
    authors: ['Z. Ahmed', 'S. Saleem', 'S. Nadeem', 'A. U. Khan'],
    title:
      'Squeezing flow of carbon nanotubes-based nanofluid in channel considering temperature-dependent viscosity: A numerical approach',
    journal: 'Arabian Journal for Science and Engineering',
    volume: '46',
    issue: '3',
    pages: '2047–2053',
    doi: '10.1007/s13369-020-04981-x',
    theme: 'Fluid dynamics',
  },
  {
    year: 2019,
    authors: ['S. Nadeem', 'Z. Ahmed', 'S. Saleem'],
    title:
      'Carbon nanotubes effects in magneto nanofluid flow over a curved stretching surface with variable viscosity',
    journal: 'Microsystem Technologies',
    volume: '25',
    issue: '7',
    pages: '2881–2888',
    doi: '10.1007/s00542-018-4232-4',
    theme: 'Fluid dynamics',
  },
  {
    year: 2019,
    authors: ['Z. Ahmed', 'S. Nadeem'],
    title: 'Flow of a micropolar CNT-based nanofluid across a squeezing channel',
    journal: 'Physica Scripta',
    volume: '94',
    issue: '10',
    pages: '105203',
    doi: '10.1088/1402-4896/ab17e9',
    theme: 'Fluid dynamics',
  },
  {
    year: 2019,
    authors: ['Z. Ahmed', 'S. Nadeem', 'S. Saleem', 'R. Ellahi'],
    title:
      'Numerical study of unsteady flow and heat transfer CNT-based MHD nanofluid with variable viscosity over a permeable shrinking surface',
    journal: 'International Journal of Numerical Methods for Heat & Fluid Flow',
    volume: '29',
    issue: '12',
    pages: '4607–4623',
    doi: '10.1108/HFF-04-2019-0346',
    theme: 'Transport phenomena',
  },
  {
    year: 2019,
    authors: ['Z. Ahmed', 'A. Al-Qahtani', 'S. Nadeem', 'S. Saleem'],
    title:
      'Computational study of MHD nanofluid flow possessing micro-rotational inertia over a curved surface with variable thermophysical properties',
    journal: 'Processes',
    volume: '7',
    issue: '6',
    pages: '387',
    doi: '10.3390/pr7060387',
    theme: 'Transport phenomena',
  },
  {
    year: 2016,
    authors: ['S. Nadeem', 'Z. Ahmed', 'S. Saleem'],
    title: 'The effect of variable viscosities on micropolar flow of two nanofluids',
    journal: 'Zeitschrift für Naturforschung A',
    volume: '71',
    issue: '12',
    pages: '1121–1129',
    doi: '10.1515/zna-2015-0491',
    theme: 'Fluid dynamics',
  },
];
