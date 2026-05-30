export type TShow = "popular" | "newest";

import { TCity } from '@/components/Cities/types';
import { TOrganizer } from '@/components/WeddingOrganizers/types';
import { TBonus } from '@/components/BonusPackages/types';
import { TTestimonials } from '@/components/Testimonials/types';

type TPackage = {
  id: number,
  name: string,
  slug: string,
  price: number,
  is_popular: 1 | 0,
  thumbnail: string,
  about: string,
  city: TCity,
  wedding_organizer: TOrganizer,
  photos: {id: number, photo: string}[],
  wedding_bonus_packages: {id: number, bonus_package: TBonus}[],
  wedding_testimonials: TTestimonials[],
}
