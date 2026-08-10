export type ProductCategory = 'life' | 'pension' | 'investments' | 'education' | 'general';

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  shortDesc: string;
  fullDesc: string;
  keyBenefits: string[];
  targetAudience: string;
  policyPeriod?: string;
  minInvestment?: string;
  iconName: string;
  badge?: string;
  whatsappMessage: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: string[];
  keyTakeaways: string[];
  relatedProductId?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  date: string;
  verified: boolean;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  topic: string;
  date: string;
  timeSlot: string;
  meetingType: 'in-person' | 'phone' | 'virtual' | 'whatsapp';
  notes: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
}

export interface ReviewFormData {
  clientName: string;
  clientRole: string;
  location: string;
  rating: number;
  serviceUsed: string;
  comment: string;
}
