export type PersonCategory = 'Group head' | 'Current researcher' | 'Alumnus';

export type Person = {
  slug: string;
  name: string;
  initials: string;
  role: string;
  cardRole: string;
  category: PersonCategory;
  institution?: string;
  status?: string;
  research?: string;
  portrait: string;
  portraitAlt: string;
};

export const groupHead: Person = {
  slug: 'zahid-ahmed',
  name: 'Zahid Ahmed',
  initials: 'ZA',
  role: 'Assistant Professor of Applied Mathematics',
  cardRole: 'Group Head',
  category: 'Group head',
  portrait: '/images/people/zahid-ahmed.jpg',
  portraitAlt: 'Dr. Zahid Ahmed',
};

export const currentResearchers: Person[] = [
  {
    slug: 'adil-hussain',
    name: 'Adil Hussain',
    initials: 'AH',
    role: 'PhD Researcher',
    cardRole: 'PhD Researcher',
    category: 'Current researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Computational and Machine-Learning Approaches to Mantle Dynamics in Planetary Bodies',
    portrait: '/images/people/placeholders/adil-hussain.svg',
    portraitAlt: 'Temporary profile placeholder for Adil Hussain',
  },
  {
    slug: 'tamanna-rehman',
    name: 'Tamanna Rehman',
    initials: 'TR',
    role: 'MS Researcher',
    cardRole: 'MS Researcher',
    category: 'Current researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Truncated Anelastic Liquid Approximation-Based Numerical Simulation of Compressible Mantle Convection in Cylindrical Geometry: Effects of Buoyancy Forcing and Viscosity Contrast',
    portrait: '/images/people/placeholders/tamanna-rehman.svg',
    portraitAlt: 'Temporary profile placeholder for Tamanna Rehman',
  },
  {
    slug: 'khadija-kamil',
    name: 'Khadija Kamil',
    initials: 'KK',
    role: 'MS Researcher',
    cardRole: 'MS Researcher',
    category: 'Current researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Numerical Simulation of Mantle Convection in Super-Earths: Effects of Adiabatic Compression, Depth-Dependent Thermal Conductivity, and Density Variation',
    portrait: '/images/people/placeholders/khadija-kamil.svg',
    portraitAlt: 'Temporary profile placeholder for Khadija Kamil',
  },
  {
    slug: 'lubna-fazal',
    name: 'Lubna Fazal',
    initials: 'LF',
    role: 'MS Researcher',
    cardRole: 'MS Researcher',
    category: 'Current researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Analytical Solutions for Canonical Mantle Convection Configurations and Their Use in Model Verification',
    portrait: '/images/people/placeholders/lubna-fazal.svg',
    portraitAlt: 'Temporary profile placeholder for Lubna Fazal',
  },
];

export const alumni: Person[] = [
  {
    slug: 'waseef-ullah',
    name: 'Waseef Ullah',
    initials: 'WU',
    role: 'MS',
    cardRole: 'Alumnus',
    category: 'Alumnus',
    institution: 'GIKI',
    status: 'Completed 2025',
    research:
      'Computational Analysis of Bi-directional Nanofluid Flow Over Nonlinear Stretching Surfaces',
    portrait: '/images/people/placeholders/waseef-ullah.svg',
    portraitAlt: 'Temporary profile placeholder for Waseef Ullah',
  },
  {
    slug: 'khowlah-naeem',
    name: 'Khowlah Naeem',
    initials: 'KN',
    role: 'MS',
    cardRole: 'Alumna',
    category: 'Alumnus',
    institution: 'GIKI',
    status: 'Completed 2024',
    research:
      'Numerical Solution of Boundary-Layer MHD Nanofluid Flow Over a Stretching Sheet in a Porous Medium',
    portrait: '/images/people/placeholders/khowlah-naeem.svg',
    portraitAlt: 'Temporary profile placeholder for Khowlah Naeem',
  },
  {
    slug: 'irfan-ellahi',
    name: 'Irfan Ellahi',
    initials: 'IE',
    role: 'MS',
    cardRole: 'Alumnus',
    category: 'Alumnus',
    institution: 'IoBM',
    status: 'Completed 2022',
    research:
      'Heat and Mass Transfer of Two-Dimensional Boundary Layer Nanofluid Flow Over a Stretching Surface: A Numerical Study',
    portrait: '/images/people/placeholders/irfan-ellahi.svg',
    portraitAlt: 'Temporary profile placeholder for Irfan Ellahi',
  },
];

export const collaborators: Person[] = [];

export const people: Person[] = [groupHead, ...currentResearchers, ...alumni, ...collaborators];
