export type TShow = "popular" | "newest";

import { TCity } from '@/components/Cities/types';
import { TOrganizer } from '@/components/WeddingOrganizers/types';

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
}
