import { TPackage } from "@/components/WeddingPackages/types";

export type TTestimonials = {
  id: number,
  name: string,
  occupation: string,
  photo: string,
  message: string,
  wedding_package: TPackage,
}
