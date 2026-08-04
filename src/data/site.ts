export const site = {
  name: 'Computational Mathematics & Geodynamics Group',
  shortName: 'CMGG',
  tagline: 'Computational Mathematics for Planetary Mantle Dynamics',
  mission:
    'Numerical PDEs, scientific computing, and high-performance simulation of mantle convection and planetary interiors.',
  institution: 'Ghulam Ishaq Khan Institute of Engineering Sciences and Technology',
  faculty: 'Faculty of Basic Sciences',
  location: 'Swabi, Pakistan',
  email: 'zahid.ahmed@giki.edu.pk',
  profiles: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?view_op=list_works&hl=en&user=-DCfx20AAAAJ&sortby=pubdate',
    },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Zahid-Ahmed-5' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zahid-ahmed-b4999221/' },
  ],
  navigation: [
    { label: 'Research', path: '/research/' },
    { label: 'People', path: '/people/' },
    { label: 'Projects', path: '/projects/' },
    { label: 'Publications', path: '/publications/' },
    { label: 'Teaching', path: '/teaching/' },
    { label: 'Work With Us', path: '/work-with-us/' },
    { label: 'Contact', path: '/contact/' },
  ],
} as const;

export const head = {
  name: 'Zahid Ahmed',
  honorificName: 'Dr. Zahid Ahmed',
  role: 'Assistant Professor of Applied Mathematics',
  bio: 'Zahid Ahmed is a computational mathematician whose work connects numerical analysis, scientific computing, mathematical modelling, computational fluid dynamics, and nonlinear differential equations. At GIKI, he teaches undergraduate and graduate mathematics and supervises research in computational mathematics, numerical modelling, and mantle convection.',
  researchInterests: [
    'Scientific computing and numerical analysis',
    'Numerical methods for ordinary and partial differential equations',
    'Computational fluid dynamics and heat/mass transfer',
    'Mantle convection, geophysical fluid dynamics, and super-Earth modelling',
    'Mathematical modelling of nonlinear transport phenomena',
    'Machine learning and physics-informed methods for differential equations',
  ],
  education: [
    {
      degree: 'PhD in Applied Mathematics',
      institution: 'Quaid-i-Azam University, Islamabad, Pakistan',
      years: '2016–2020',
    },
    {
      degree: 'MPhil in Applied Mathematics',
      institution: 'Quaid-i-Azam University, Islamabad, Pakistan',
      years: '2013–2014',
    },
    {
      degree: 'MSc in Mathematics',
      institution: 'Quaid-i-Azam University, Islamabad, Pakistan',
      years: '2009–2011',
    },
    {
      degree: 'BSc in Mathematics, Physics, and Geology',
      institution: 'University of Karachi, Pakistan',
      years: '2006–2008',
    },
  ],
  skills: [
    'MATLAB, Python, and C++',
    'Finite-difference methods and numerical PDE solvers',
    'Matrix-based algorithms, optimization, and scientific visualization',
    'ANSYS Fluent and COMSOL Multiphysics',
    'TensorFlow, PyTorch, Keras, and deep-learning workflows',
  ],
} as const;
