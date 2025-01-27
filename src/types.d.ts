declare interface ApiResponse {
  message: string;
}
declare interface IReview {
  _id: string;
  authorId: IUserPopulated;
  content: string;
  courseId: {
    _id: string;
    title: string;
  };
}

declare interface IReviewResponse extends ApiResponse {
  reviews: IReview[];
}

declare interface IFeature {
  title: string;
  value: boolean;
}

declare interface IPricingPlan {
  _id: string;
  type: 'free' | 'paid';
  name: string;
  perMonth: number;
  perYear: number;
  features: Record<string, IFeature>;
  createdAt?: string;
  updatedAt?: string;
}
declare interface IPricingPlanResponse extends ApiResponse {
  plans: IPricingPlan[];
}

declare interface IQuestion {
  _id: string;
  question: string;
  answer: string;
  linkTitle: string;
  link: string;
}

declare interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: File | undefined;
}

declare interface IUserPopulated {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
}

declare interface ILoginResponse extends ApiResponse {
  user: IUser;
}

declare type IUserMutation = Omit<IUser, '_id'> & {
  password: string;
};

declare interface ICourse {
  _id: string;
  title: string;
  description: string;
  availability?: 'free' | 'paid';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  length: number;
  author: IUserPopulated;
  previewImages: string[];
  mainImg: string;
  mainVideo?: string;
  contents: IContentsItem[];
}

declare interface IContentsItem {
  _id: string;
  title: string;
  lessons: ILesson[];
}

declare interface ILesson {
  _id: string;
  title: string;
  length: number;
  videoUrl: string;
}

declare interface ICoursesResponse extends ApiResponse {
  courses: ICourse[];
}
declare interface ICourseResponse extends ApiResponse {
  course: ICourse;
}
