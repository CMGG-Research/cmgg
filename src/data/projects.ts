export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string[];
  methods: string[];
  themes: string[];
};

export const projects: Project[] = [
  {
    slug: 'mantle-convection',
    number: 'A',
    title: 'Computational Modelling of Mantle Convection in Super-Earths',
    eyebrow: 'Featured project · Ongoing research',
    summary:
      'Numerical models for compressible mantle convection in cylindrical geometry, with attention to strongly variable material properties and planetary-scale heat transport.',
    description: [
      'This project studies nonlinear PDE systems for compressible mantle convection in cylindrical domains. The models bring together buoyancy forcing, viscosity contrast, density variation, depth-dependent thermal conductivity, and adiabatic compression.',
      'Finite-difference and scientific-computing methods support model development and verification. The work is motivated by heat transport inside terrestrial planets and super-Earths, while remaining careful not to infer unpublished numerical outcomes.',
    ],
    methods: ['Finite differences', 'Cylindrical geometry', 'Nonlinear PDEs', 'Model verification'],
    themes: ['Geodynamics', 'Scientific computing'],
  },
  {
    slug: 'nanofluid-transport',
    number: 'B',
    title: 'Numerical Simulation of Nanofluid and Transport Phenomena',
    eyebrow: 'Established research programme',
    summary:
      'Mathematical modelling and numerical analysis of MHD nanofluid flows, micropolar fluids, boundary layers, and coupled heat and mass transfer.',
    description: [
      'The programme examines how magnetic forcing, micro-rotational effects, porous media, geometry, and variable thermophysical properties influence transport systems.',
      'Research uses implicit finite-difference schemes, Keller-box type solvers, matrix-based numerical algorithms, and scientific visualization.',
    ],
    methods: [
      'Boundary-layer models',
      'Keller-box methods',
      'MHD flows',
      'Scientific visualization',
    ],
    themes: ['Fluid dynamics', 'Transport phenomena'],
  },
  {
    slug: 'scientific-ml',
    number: 'C',
    title: 'Machine Learning for Differential Equations and Scientific Computing',
    eyebrow: 'Developing research direction',
    summary:
      'Exploration of deep-learning and physics-informed approaches for differential-equation-based modelling and scientific computation.',
    description: [
      'This developing direction considers how learning-based approaches can complement classical numerical methods while retaining physical constraints, interpretability, and verification.',
      'Current activity includes Python, TensorFlow, and PyTorch workflows in computational mathematics education and research planning. No mature publication record in this direction is claimed.',
    ],
    methods: ['Physics-informed methods', 'Python', 'TensorFlow', 'PyTorch'],
    themes: ['Scientific machine learning', 'Differential equations'],
  },
];

export const manuscripts = [
  'Numerical Simulation of Compressible Mantle Convection in Cylindrical Geometry: Effects of Buoyancy Forcing and Viscosity Contrast',
  'Numerical Investigation of Adiabatic Compression, Depth-Dependent Thermal Conductivity, and Density Variation in Super-Earth Mantle Convection',
] as const;
