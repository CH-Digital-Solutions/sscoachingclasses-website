import { FaBook, FaGraduationCap } from 'react-icons/fa';

export const programs = [
  {
    id: 'school',
    title: 'School Section',
    subtitle: '1st to 10th',
    description: 'Comprehensive preparation for classes 1st to 10th in Hindi, Semi-English, and English medium. Regular & private students welcome.',
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
    id: 'college',
    title: 'College Section',
    subtitle: '11th & 12th HSC',
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
  }
];

export const academicChips = [
  { label: 'School (1st-10th)', category: 'program' },
  { label: 'HSC Commerce', category: 'program' }
];
