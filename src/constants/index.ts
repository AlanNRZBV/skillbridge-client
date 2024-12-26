const iconUrl = `${import.meta.env.VITE_API_URL}/assets/icons/`;
const imageUrl = `${import.meta.env.VITE_API_URL}/assets/images/`;

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

export const images = {
  courseCover01: `${imageUrl}/course-01-cover.png`,
  courseCover02: `${imageUrl}/course-02-cover.png`,
  courseCover03: `${imageUrl}/course-03-cover.png`,
  courseCover04: `${imageUrl}/course-04-cover.png`,
  courseCover05: `${imageUrl}/course-05-cover.png`,
  courseCover06: `${imageUrl}/course-06-cover.png`,
  avatar01: `${imageUrl}/avatar-01.png`,
  avatar02: `${imageUrl}/avatar-02.png`,
  avatar03: `${imageUrl}/avatar-03.png`,
  avatar04: `${imageUrl}/avatar-04.png`,
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

export const COURSES_CARDS: ICourse[] = [
  {
    _id: '01',
    img: images.courseCover01,
    title: 'Web Design Fundamentals',
    description:
      'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
    length: '4',
    difficulty: 'beginner',
    author: 'John Smith',
  },
  {
    _id: '02',
    img: images.courseCover02,
    title: 'UI/UX Design',
    description:
      'Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.',
    length: '6',
    difficulty: 'intermediate',
    author: 'Emily Johnson',
  },
  {
    _id: '03',
    img: images.courseCover03,
    title: 'Mobile App Development',
    description:
      'Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.',
    length: '8',
    difficulty: 'intermediate',
    author: 'David Brown',
  },
  {
    _id: '04',
    img: images.courseCover04,
    title: 'Graphic Design for Beginners',
    description:
      'Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.',
    length: '10',
    difficulty: 'beginner',
    author: 'Sarah Thompson',
  },
  {
    _id: '05',
    img: images.courseCover05,
    title: 'Front-End Web Development',
    description:
      'Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.',
    length: '10',
    difficulty: 'intermediate',
    author: 'Michael Adams',
  },
  {
    _id: '06',
    img: images.courseCover06,
    title: 'Advanced JavaScript',
    description:
      'Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.',
    length: '6',
    difficulty: 'advanced',
    author: 'Jennifer Wilson',
  },
];

export const TESTIMONIALS_CARDS: ITestimonial[] = [
  {
    _id: '01',
    img: images.avatar01,
    author: 'Sarah Thompson',
    content:
      'The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!',
  },
  {
    _id: '02',
    img: images.avatar02,
    author: 'Michael Adams',
    content:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
  },
  {
    _id: '03',
    img: images.avatar03,
    author: 'Jennifer Wilson',
    content:
      "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
  },
  {
    _id: '04',
    img: images.avatar04,
    author: 'David Brown',
    content:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
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

export const Lorem =
  'Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.';
