declare interface ApiResponse {
  message: string;
}

declare interface ICourse {
  _id: string;
  img: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  length: string;
  author: string;
}

declare interface ITestimonial {
  _id: string;
  img: string;
  author: string;
  content: string;
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
  role: 'user' | 'admin';
}
