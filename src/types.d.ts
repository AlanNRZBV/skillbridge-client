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

declare interface IUserFromApi {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
}

declare interface IFullUserFromApi extends IUserFromApi {
  email: string;
  createdAt: string;
  updatedAt: string;
}

declare interface IUserResponse extends ApiResponse {
  user: IUser;
}

declare interface IUserUniqueErrorResponse {
  errorResponse: {
    code: number;
    keyValue: {
      email: string;
    };
  };
}

declare interface IUserMongoErrorResponse {
  errors: {
    [key: string]: {
      properties: {
        message: string;
      };
    };
  };
}

declare interface IUserPopulated {
  _id: string;
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
}

declare type IUserMutation = Omit<IUser, '_id'> & {
  password: string;
};

declare interface ILoginState {
  email: string;
  password: string;
}

declare interface ISignUpState extends ILoginState {
  firstName: string;
  lastName: string;
  profilePicture: string | undefined;
}

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
  released: boolean;
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

declare interface IAboutData {
  title: string;
  description: string;
  section: IAboutSection[];
}

declare interface IAboutCard {
  _id: string;
  title: string;
  description: string;
  icon: string;
}
declare interface IAboutSection {
  _id: string;
  title: string;
  description: string;
  type: 'achievement' | 'goal';
  cards: IAboutCard[];
}

declare interface IContactCard {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type: 'email' | 'tel' | 'geodata' | 'socials';
  title: string;
  data: string;
}

declare interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

declare interface IMessageMutation {
  subject: string;
  message: string;
  userData: IUserData;
}

declare interface IReviewResponse extends ApiResponse {
  reviews: IReview[];
}

declare interface IPricingPlanResponse extends ApiResponse {
  plans: IPricingPlan[];
}

declare interface ILoginResponse extends ApiResponse {
  user: IUserFromApi;
}

declare interface ICoursesResponse extends ApiResponse {
  courses: ICourse[];
}

declare interface ICourseResponse extends ApiResponse {
  course: ICourse;
}

declare interface IAboutResponse extends ApiResponse {
  aboutData: IAboutData;
}

declare interface IFullUserResponse extends ApiResponse {
  user: IFullUserFromApi;
}
