export const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
export const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;
export const apiUrl = import.meta.env.VITE_API_URL as string;

export const icons = {
  mainDesktop: `${iconUrl}/skillbridge-desktop.svg`,
  mainLaptop: `${iconUrl}/skillbridge-Laptop.svg`,
  mainMobile: `${iconUrl}/skillbridge-Mobile.svg`,
  facebook: `${iconUrl}/icon-facebook.png`,
  twitter: `${iconUrl}/icon-twitter.png`,
  linkedin: `${iconUrl}/icon-linkedin.png`,
  abstractLines: `${iconUrl}/insight-element.svg`,
  zapier: `${iconUrl}/icon-zapier.svg`,
  spotify: `${iconUrl}/icon-spotify.svg`,
  zoom: `${iconUrl}/icon-zoom.svg`,
  amazon: `${iconUrl}/icon-amazon.svg`,
  adobe: `${iconUrl}/icon-adobe.svg`,
  notion: `${iconUrl}/icon-notion.svg`,
  netflix: `${iconUrl}/icon-netflix.svg`,
  googleSignUp: `${iconUrl}/icon-google-sign-up.svg`,
};

export const paths = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Courses',
    path: '/courses',
  },
  {
    title: 'About Us',
    path: '/about-us',
  },
  {
    title: 'Pricing',
    path: '/pricing',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

export const footerLinks = [
  {
    title: 'Home',
    links: [
      {
        title: 'Benefits',
        to: '/',
      },
      {
        title: 'Our Courses',
        to: '/',
      },
      {
        title: 'Our Testimonials',
        to: '/',
      },
      {
        title: 'Our FAQ',
        to: '/',
      },
    ],
  },
  {
    title: 'About Us',
    links: [
      {
        title: 'Company',
        to: '/',
      },
      {
        title: 'Achievements',
        to: '/',
      },
      {
        title: 'Our Goals',
        to: '/',
      },
    ],
  },
];

export const BENEFITS_CARDS = [
  {
    id: '01',
    title: 'Flexible Learning Schedule',
    description:
      'Fit your coursework around your existing commitments and obligations.',
    link: '#',
  },
  {
    id: '02',
    title: 'Expert Instruction',
    description:
      'Learn from industry experts who have hands-on experience in design and development.',
    link: '#',
  },
  {
    id: '03',
    title: 'Diverse Course Offerings',
    description:
      'Explore a wide range of design and development courses covering various topics.',
    link: '#',
  },
  {
    id: '04',
    title: 'Updated Curriculum',
    description:
      'Access courses with up-to-date content reflecting the latest trends and industry practices.',
    link: '#',
  },
  {
    id: '05',
    title: 'Practical Projects and Assignments',
    description:
      'Develop a portfolio showcasing your skills and abilities to potential employers.',
    link: '#',
  },
  {
    id: '06',
    title: 'Interactive Learning Environment',
    description:
      'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.',
    link: '#',
  },
];

export const FAQ: IQuestion[] = [
  {
    _id: '01',
    question: 'Can I enroll in multiple courses at once?',
    answer:
      'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
    linkTitle: 'Learn About Enrolling in Multiple Courses',
    link: '#',
  },
  {
    _id: '02',
    question: 'What kind of support can I expect from instructors?',
    answer:
      'You can expect prompt responses to your queries, detailed feedback on assignments, and dedicated support through the course discussion forums.',
    linkTitle: 'Explore Instructor Support Options',
    link: '#',
  },
  {
    _id: '03',
    question:
      'Are the courses self-paced or do they have specific start and end dates?',
    answer:
      'Our courses are primarily self-paced, but some may have specific start and end dates for a more structured learning experience.',
    linkTitle: 'Understand Course Scheduling',
    link: '#',
  },
  {
    _id: '04',
    question: 'Are there any prerequisites for the courses?',
    answer:
      'Most courses are beginner-friendly, but some advanced courses may require prior knowledge or skills. Prerequisites are clearly mentioned in the course description.',
    linkTitle: 'Check Course Prerequisites',
    link: '#',
  },
  {
    _id: '05',
    question: 'Can I download the course materials for offline access?',
    answer:
      'Yes, many courses allow you to download materials such as videos, slides, and PDFs for offline learning. Check the course details for specific availability.',
    linkTitle: 'Download Course Materials Offline',
    link: '#',
  },
];

export const AboutUs = {
  title: '',
  description: '',
  achievements: {
    title: '',
    description: '',
    cards: [
      {
        title: '',
        description: '',
        icon: {},
      },
    ],
  },
  goals: {
    title: '',
    description: '',
    cards: [],
  },
};

export const Lorem =
  'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.';
