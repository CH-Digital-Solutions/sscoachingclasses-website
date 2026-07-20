export const staff = [
  {
    id: 'farman-raza-syed',
    name: 'Prof. Farman Raza Syed',
    role: 'Founder & Director',
    subject: 'Mathematics',
    qualification: 'M.Sc. Mathematics',
    exp: '18+ years',
    photo: '/staff/farman.jpg',
    bio: 'Prof. Farman Raza Syed is the visionary founder of SS Coaching Classes. With over 18 years of experience in mathematics education, he has transformed the academic journeys of thousands of students across Mumbai. His passion for teaching and commitment to student success has made SS Coaching Classes one of the most trusted names in Mumbai.',
    specializations: ['Board Exam Preparation', 'Algebra & Geometry', 'Competitive Maths', 'Student Mentoring'],
    achievements: ['Founded SS Coaching Classes in 2008', '3000+ students mentored', '200+ board toppers produced', '95% pass rate maintained'],
    quote: 'Every student has the potential to be a topper — they just need the right guidance and environment.'
  },
  {
    id: 'saima-khan',
    name: 'Mrs. Saima Khan',
    role: 'Senior Faculty',
    subject: 'Science',
    qualification: 'M.Sc. Chemistry',
    exp: '12+ years',
    photo: '/staff/saima.jpg',
    bio: 'Mrs. Saima Khan brings 12+ years of dedicated teaching experience in Science subjects. Her approach to teaching Chemistry and Science makes even the most complex concepts easy to understand. She is known for her practical demonstration methods and patient guidance.',
    specializations: ['Chemistry (Organic & Inorganic)', 'Science & Technology', 'Lab Practical Guidance', 'Board Paper Analysis'],
    achievements: ['12+ years of teaching excellence', 'Designed in-house science study material', 'Specializes in making tough concepts simple', 'Regularly conducts science workshops'],
    quote: 'Science is not about memorizing — it\'s about understanding the world around you.'
  },
  {
    id: 'mohd-irfan',
    name: 'Mr. Mohd. Irfan',
    role: 'Faculty',
    subject: 'English & SST',
    qualification: 'M.A. English',
    exp: '10+ years',
    photo: '/staff/irfan.jpg',
    bio: 'Mr. Mohd. Irfan is a dedicated English and Social Studies teacher with a decade of experience. He focuses on building strong communication skills alongside academic excellence. His engaging teaching style makes history and geography come alive for students.',
    specializations: ['English Grammar & Literature', 'Social Studies (History & Geography)', 'Essay & Letter Writing', 'Communication Skills'],
    achievements: ['10+ years of teaching experience', 'English language proficiency trainer', 'Designed essay writing workshop modules', 'Mentored students in debate competitions'],
    quote: 'Language is the key that opens every door — master English and you master opportunities.'
  },
  {
    id: 'asif-shaikh',
    name: 'Mr. Asif Shaikh',
    role: 'Faculty',
    subject: 'Commerce & Accounts',
    qualification: 'M.Com, CA Inter',
    exp: '8+ years',
    photo: '/staff/asif.jpg',
    bio: 'Mr. Asif Shaikh combines academic expertise with practical accounting knowledge. With an M.Com degree and CA Inter qualification, he brings real-world financial understanding to his teaching. He specializes in making accounts and commerce subjects approachable for every student.',
    specializations: ['Book-Keeping & Accountancy', 'Business Studies', 'Economics', 'Taxation Basics'],
    achievements: ['8+ years of commerce teaching', 'CA Inter qualified', 'Developed step-by-step accounts solving methods', 'Guided students toward CA/CS career paths'],
    quote: 'Numbers tell stories — I teach students to read them.'
  },
  {
    id: 'nazia-parveen',
    name: 'Ms. Nazia Parveen',
    role: 'Faculty',
    subject: 'Hindi & Urdu',
    qualification: 'M.A. Hindi',
    exp: '9+ years',
    photo: '/staff/nazia.jpg',
    bio: 'Ms. Nazia Parveen is the backbone of our Hindi and Urdu medium batches. Her fluency in both languages and deep understanding of board exam patterns makes her invaluable to students studying in Hindi and Urdu medium. She ensures no student faces a language barrier in their education.',
    specializations: ['Hindi Literature & Grammar', 'Urdu Language & Poetry', 'Hindi Medium Board Prep', 'Translation & Comprehension'],
    achievements: ['9+ years of language teaching', 'Expert in Hindi & Urdu medium curriculum', 'Developed bilingual study materials', 'Cultural literacy advocate'],
    quote: 'भाषा सिर्फ बोलने का ज़रिया नहीं — यह सोचने और समझने का आधार है।'
  },
  {
    id: 'salman-ahmad',
    name: 'Mr. Salman Ahmad',
    role: 'Faculty',
    subject: 'Physics & Maths',
    qualification: 'B.Tech, M.Sc.',
    exp: '7+ years',
    photo: '/staff/salman.jpg',
    bio: 'Mr. Salman Ahmad combines engineering precision with teaching passion. His B.Tech background gives him a unique approach to teaching Physics and Mathematics — focusing on problem-solving strategies and conceptual clarity. He is popular among HSC Science students for his numerical practice sessions.',
    specializations: ['Physics (Mechanics & Optics)', 'Mathematics (Calculus & Algebra)', 'Numerical Problem Solving', 'Competitive Exam Preparation'],
    achievements: ['7+ years of STEM teaching', 'B.Tech + M.Sc. dual qualification', 'Specializes in HSC Science coaching', 'Designed numerical practice worksheets'],
    quote: 'Physics and Maths are not difficult — they just need the right approach and consistent practice.'
  }
];

export const fallbackAvatar = (seed) =>
  `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(seed)}&backgroundColor=b6e3f4,c0aede,d1d4f9,ffdfbf`;
