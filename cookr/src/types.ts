export type TabType = 'home' | 'menu' | 'chefs' | 'plans' | 'how-it-works' | 'reviews' | 'terms';

export type VegType = 'veg' | 'non-veg';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'South Indian' | 'North Indian' | 'Snacks' | 'Healthy Bowls' | 'Desserts' | 'Kerala Specials';
  vegType: VegType;
  calories: number;
  rating: number;
  reviewsCount: number;
  image: string;
  isBestSeller?: boolean;
  ingredients?: string[];
  prepTime?: string;
  chefName?: string;
}

export interface Chef {
  id: string;
  name: string;
  city: string;
  speciality: string;
  rating: number;
  ordersCompleted: number;
  avatar: string;
  coverImage: string;
  dishes: string[];
  bio: string;
  since: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  favoriteDish: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}
