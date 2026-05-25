import { TPackage } from "@/components/WeddingPackages/types";

export type TCity = {
    id: number,
    name: string,
    slug: string,
    icon: string,
    wedding_package_count: number,
    wedding_packages: TPackage[],
};
