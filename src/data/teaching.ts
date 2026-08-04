export const undergraduateCourses = [
  'Calculus I & II',
  'Linear Algebra',
  'Differential Equations',
  'Probability and Statistics',
  'Numerical Analysis',
  'Discrete Structures',
  'Mathematics for Business Decisions',
] as const;

export const graduateCourses = [
  'Partial Differential Equations',
  'Advanced Fluid Mechanics',
  'Advanced Transform Techniques',
  'Computational Methods for Engineers',
  'Mathematical Software and Scientific Computing',
] as const;

export const toolkit = [
  { group: 'Programming', items: ['MATLAB', 'Python', 'C++'] },
  {
    group: 'Scientific computing',
    items: [
      'Finite-difference methods',
      'Numerical PDE solvers',
      'Matrix-based algorithms',
      'Optimization',
      'Scientific visualization',
    ],
  },
  { group: 'Simulation', items: ['ANSYS Fluent', 'COMSOL Multiphysics'] },
  { group: 'Machine learning', items: ['TensorFlow', 'PyTorch', 'Keras'] },
] as const;

export const futureResources: Array<{ title: string; kind: string; url?: string }> = [];
