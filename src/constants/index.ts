import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid';

export const apiUrl = `${import.meta.env.VITE_API_URL}`;

export const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
export const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;
export const tempPath = `${import.meta.env.VITE_CONSTRUCTION_PATH}`;

export const icons = {
  mainDesktop: `${iconUrl}skillbridge-desktop.svg`,
  mainLaptop: `${iconUrl}skillbridge-laptop.svg`,
  mainMobile: `${iconUrl}skillbridge-mobile.svg`,
  facebook: `${iconUrl}icon-facebook.png`,
  twitter: `${iconUrl}icon-twitter.png`,
  linkedin: `${iconUrl}icon-linkedin.png`,
  abstractLines: `${iconUrl}insight-element.svg`,
  zapier: `${iconUrl}icon-zapier.svg`,
  spotify: `${iconUrl}icon-spotify.svg`,
  zoom: `${iconUrl}icon-zoom.svg`,
  amazon: `${iconUrl}icon-amazon.svg`,
  adobe: `${iconUrl}icon-adobe.svg`,
  notion: `${iconUrl}icon-notion.svg`,
  netflix: `${iconUrl}icon-netflix.svg`,
  googleSignUp: `${iconUrl}icon-google-sign-up.svg`,
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

export const ContactCards: IContactCard[] = [
  {
    icon: EnvelopeIcon,
    data: 'support@skillbridge.com',
    type: 'email',
    title: 'support@skillbridge.com',
  },
  {
    icon: PhoneIcon,
    data: '910000000000',
    type: 'tel',
    title: '+91 00000 00000',
  },
  {
    icon: MapPinIcon,
    data: "https://www.google.com/maps/place/10%C2%B008'38.4%22N+142%C2%B022'44.0%22E/@10.14401,142.37888,25551350m/data=!3m1!1e3!4m4!3m3!8m2!3d10.14401!4d142.37888?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D",
    type: 'geodata',
    title: 'Some Where in the World',
  },
  {
    icon: EnvelopeIcon,
    data: 'skillbridge',
    type: 'socials',
    title: 'Social Profiles',
  },
];

export const Headings = {
  pricing: {
    title: 'Our Pricing',
    description:
      "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.",
  },
  courses: {
    title: 'Online Courses on Design and Development',
    description:
      'Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape.',
  },
  contacts: {
    title: 'Contact Us',
    description:
      'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.',
  },
};

export const HERO_CARDS_ARRAY = [
  {
    url: icons.zapier,
    alt: 'zapier icon',
  },
  {
    url: icons.amazon,
    alt: 'amazon icon',
  },
  {
    url: icons.spotify,
    alt: 'spotify icon',
  },
  {
    url: icons.zoom,
    alt: 'zoom icon',
  },
  {
    url: icons.adobe,
    alt: 'adobe icon',
  },
  {
    url: icons.notion,
    alt: 'notion icon',
  },
  {
    url: icons.netflix,
    alt: 'netflix icon',
  },
];

export const Lorem =
  'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.';
