export type ResearchPillar = {
  id: string;
  number: string;
  title: string;
  summary: string;
  motivation: string;
  questions: string[];
  methods: string[];
  applications: string[];
  related: string[];
  status?: string;
};

export const researchPillars: ResearchPillar[] = [
  {
    id: 'numerical-pdes',
    number: '01',
    title: 'Numerical PDEs and Scientific Computing',
    summary:
      'Reliable numerical methods for nonlinear differential-equation systems and computationally demanding models.',
    motivation:
      'Many flow and transport systems couple strong nonlinearities, variable material properties, and demanding boundary conditions. Robust discretization and verification are essential before physical interpretation.',
    questions: [
      'How can nonlinear PDE systems be discretized without losing key physical behaviour?',
      'Which benchmarks best reveal numerical error and model limitations?',
    ],
    methods: [
      'Finite-difference methods',
      'Implicit schemes and Keller-box type solvers',
      'Matrix-based numerical algorithms',
      'Verification against analytical configurations',
    ],
    applications: ['Geophysical flows', 'Boundary layers', 'Heat and mass transfer'],
    related: ['Computational Modelling of Mantle Convection in Super-Earths'],
  },
  {
    id: 'geodynamics',
    number: '02',
    title: 'Mantle Convection and Geodynamics',
    summary:
      'Computational models of compressible convection in terrestrial planets and super-Earth interiors.',
    motivation:
      'Mantle convection links planetary-scale heat transport to the thermal and dynamical evolution of rocky worlds. The underlying models require careful treatment of compressibility and depth-dependent properties.',
    questions: [
      'How do buoyancy forcing and viscosity contrast shape compressible convection?',
      'How do adiabatic compression and variable conductivity and density affect model behaviour?',
    ],
    methods: [
      'Cylindrical-domain modelling',
      'Nonlinear PDE systems',
      'Finite-difference discretization',
      'Truncated anelastic liquid approximation',
    ],
    applications: ['Terrestrial planets', 'Super-Earths', 'Model verification'],
    related: ['Computational Modelling of Mantle Convection in Super-Earths'],
  },
  {
    id: 'transport',
    number: '03',
    title: 'Computational Fluid Dynamics and Transport Phenomena',
    summary:
      'Mathematical modelling of complex fluids, boundary layers, and coupled heat and mass transport.',
    motivation:
      'Transport systems with magnetic effects, microstructure, nanoparticles, or strongly varying properties require numerical approaches that can track coupled momentum and thermal behaviour.',
    questions: [
      'How do variable viscosity and thermophysical properties alter nonlinear flow?',
      'How do geometry, porous media, and magnetic forcing change heat and mass transfer?',
    ],
    methods: [
      'Boundary-layer modelling',
      'Implicit finite-difference schemes',
      'Computational fluid dynamics',
      'Scientific visualization',
    ],
    applications: ['Nanofluid flow', 'MHD systems', 'Heat and mass transfer'],
    related: ['Numerical Simulation of Nanofluid and Transport Phenomena'],
  },
  {
    id: 'scientific-ml',
    number: '04',
    title: 'Scientific Machine Learning for Differential Equations',
    summary:
      'A developing research direction connecting data-driven methods with differential-equation models.',
    motivation:
      'Physics-informed and data-driven methods may complement established numerical solvers when models are expensive, partially observed, or require fast surrogate predictions.',
    questions: [
      'Where can learning-based methods support rather than obscure numerical analysis?',
      'How can physical constraints and verification be retained in learned models?',
    ],
    methods: [
      'Physics-informed neural networks',
      'TensorFlow and PyTorch workflows',
      'Scientific Python',
      'Benchmark-driven evaluation',
    ],
    applications: ['Differential equations', 'Scientific computing education', 'Research planning'],
    related: ['Machine Learning for Differential Equations and Scientific Computing'],
    status: 'Developing direction',
  },
];
