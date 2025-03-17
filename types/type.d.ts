export type Service = {
  href: string;
  name: string;
  description: string;
  imageSrc: string;
};
export type FaqCommon = {
  question: string;
  answer: string;
};
export type Testimonial = {
  id: number;
  name: string;
  role: string;
  service: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
};
export type User = {
  name: string;
  id: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};
export type Response = {
  name: string;
  id: string;
  email: string;
  message: string;
  phone: string;
  interest: string;
  createdAt: Date;
};
