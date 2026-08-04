export type Person = {
  name: string;
  initials: string;
  role: string;
  institution: string;
  status: string;
  research: string;
};

export const currentResearchers: Person[] = [
  {
    name: 'Adil Hussain',
    initials: 'AH',
    role: 'PhD Researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Computational and Machine-Learning Approaches to Mantle Dynamics in Planetary Bodies',
  },
  {
    name: 'Tamanna Rehman',
    initials: 'TR',
    role: 'MS Researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Truncated Anelastic Liquid Approximation-Based Numerical Simulation of Compressible Mantle Convection in Cylindrical Geometry: Effects of Buoyancy Forcing and Viscosity Contrast',
  },
  {
    name: 'Khadija Kamil',
    initials: 'KK',
    role: 'MS Researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Numerical Simulation of Mantle Convection in Super-Earths: Effects of Adiabatic Compression, Depth-Dependent Thermal Conductivity, and Density Variation',
  },
  {
    name: 'Lubna Fazal',
    initials: 'LF',
    role: 'MS Researcher',
    institution: 'GIKI',
    status: '2026 · In progress',
    research:
      'Analytical Solutions for Canonical Mantle Convection Configurations and Their Use in Model Verification',
  },
];

export const alumni: Person[] = [
  {
    name: 'Waseef Ullah',
    initials: 'WU',
    role: 'MS',
    institution: 'GIKI',
    status: 'Completed 2025',
    research:
      'Computational Analysis of Bi-directional Nanofluid Flow Over Nonlinear Stretching Surfaces',
  },
  {
    name: 'Khowlah Naeem',
    initials: 'KN',
    role: 'MS',
    institution: 'GIKI',
    status: 'Completed 2024',
    research:
      'Numerical Solution of Boundary-Layer MHD Nanofluid Flow Over a Stretching Sheet in a Porous Medium',
  },
  {
    name: 'Irfan Ellahi',
    initials: 'IE',
    role: 'MS',
    institution: 'IoBM',
    status: 'Completed 2022',
    research:
      'Heat and Mass Transfer of Two-Dimensional Boundary Layer Nanofluid Flow Over a Stretching Surface: A Numerical Study',
  },
];

export const collaborators: Person[] = [];
