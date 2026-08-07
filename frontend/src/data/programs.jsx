import { FaBook, FaGraduationCap, FaFlask, FaPaintBrush } from 'react-icons/fa';

export const programs = [
  {
    id: 'school',
    title: 'School Section',
    subtitle: '5th to 10th',
    description: 'Comprehensive preparation for classes 5th to 10th in Hindi, Semi-English, and English medium. Regular & private students welcome.',
    features: [
      'Hindi, Semi-English & English medium',
      'All subjects covered',
      'Regular + Private students accepted',
      'Weekly tests & parent-teacher meetings',
      'Previous year paper practice'
    ],
    icon: <FaBook />,
    highlighted: false
  },
  {
    id: 'commerce',
    title: 'Commerce',
    subtitle: '11th & 12th',
    description: 'Focused HSC coaching for Commerce stream with expert faculty and board-focused preparation.',
    features: [
      'Commerce stream',
      'Board exam focused preparation',
      'Experienced subject-specialist faculty',
      'Regular doubt-clearing sessions',
      'Comprehensive study material provided'
    ],
    icon: <FaGraduationCap />,
    highlighted: false
  },
  {
    id: 'arts',
    title: 'Arts',
    subtitle: '11th & 12th',
    description: 'Complete Arts stream coaching for 11th & 12th with subject-specialist teachers and structured study plans.',
    features: [
      'Arts stream',
      'Board exam focused preparation',
      'Experienced subject-specialist faculty',
      'Regular doubt-clearing sessions',
      'Comprehensive study material provided'
    ],
    icon: <FaPaintBrush />,
    highlighted: false
  },
  {
    id: 'science',
    title: 'Science',
    subtitle: '11th & 12th',
    description: 'Rigorous Science stream coaching for 11th & 12th with lab-oriented and concept-based learning approach.',
    features: [
      'Science stream',
      'Board exam focused preparation',
      'Experienced subject-specialist faculty',
      'Regular doubt-clearing sessions',
      'Comprehensive study material provided'
    ],
    icon: <FaFlask />,
    highlighted: false
  }
];

export const academicChips = [
  { label: 'School (5th-10th)', category: 'program' },
  { label: 'HSC Commerce', category: 'program' },
  { label: 'HSC Arts', category: 'program' },
  { label: 'HSC Science', category: 'program' }
];
