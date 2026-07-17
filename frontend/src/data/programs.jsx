import { FaBook, FaGraduationCap, FaUniversity } from 'react-icons/fa';

export const programs = [
  {
    id: 'school',
    title: 'School Section',
    subtitle: '7th to 10th SSC',
    description: 'Comprehensive board preparation for classes 7th to 10th in Hindi, Urdu & English medium. Regular & private students welcome.',
    features: [
      'All subjects covered — Maths, Science, English, Social Studies',
      'Hindi, Urdu & English medium batches',
      'Regular + Private students accepted',
      'Weekly tests & parent-teacher meetings',
      'Previous year board paper practice'
    ],
    icon: <FaBook />,
    highlighted: false
  },
  {
    id: 'college',
    title: 'College Section',
    subtitle: '11th & 12th HSC',
    description: 'Focused HSC coaching for Commerce & Science streams with expert faculty and board-focused preparation.',
    features: [
      'Commerce & Science streams',
      'Board exam focused preparation',
      'Experienced subject-specialist faculty',
      'Regular doubt-clearing sessions',
      'Comprehensive study material provided'
    ],
    icon: <FaGraduationCap />,
    highlighted: false
  },
  {
    id: 'degree',
    title: 'Degree Section',
    subtitle: 'B.Com · BAF · BMS',
    description: 'University exam coaching for FY, SY & TY degree students. Focused approach for university exams & career readiness.',
    features: [
      'B.Com, BAF, BMS programs',
      'FY, SY & TY batches available',
      'University exam pattern training',
      'Career guidance & placement support',
      'Flexible batch timings'
    ],
    icon: <FaUniversity />,
    highlighted: true
  }
];

export const academicChips = [
  { label: 'SSC (10th Board)', category: 'program' },
  { label: 'HSC Science', category: 'program' },
  { label: 'HSC Commerce', category: 'program' },
  { label: 'B.Com', category: 'program' },
  { label: 'BAF', category: 'program' },
  { label: 'BMS', category: 'program' },
  { label: 'Hindi Medium', category: 'medium' },
  { label: 'Urdu Medium', category: 'medium' },
  { label: 'English Medium', category: 'medium' }
];
