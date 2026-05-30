import Header from '@/components/Header';
import React from 'react';
import Star from '@/assets/images/star.svg';
import { Metadata, ResolvingMetadata } from 'next';
import { TCity } from '@/components/Cities/types';
import thousands from '@/libs/thousands';
import { WeddingPackageGrid, WeddingPackageSlider } from '@/components/WeddingPackages';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';

type Request = {
  params: {
    citySlug: string,
  }
};

async function getData(slug: string) {
  try {
    const req = await fetch(`${process.env.HOST_API}/api/city/${slug}`, {
      method: "GET",
      cache: "no-cache",
    })

    return req.json();
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata(
  { params }: Request,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { citySlug } = params
  const { data: city }: { data: TCity } = await getData(citySlug)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: city.name,
    openGraph: {
      images: [`${process.env.HOST_API}/storage/${city.icon}`],
    },
  }
}

async function DetailsCityPage({ params }: Request) {
  const { data: city }: { data: TCity } = await getData(params.citySlug)
  return (
    <main className="flex flex-col gap-y-16">
      <Header />

      <section className="flex flex-col -mt-8">
        <div className="container mx-auto flex justify-between items-center mb-8">
          <span className="flex max-w-sm">
            <h2 className="text-4xl font-bold">Wedding Packages in {city.name} City</h2>
          </span>
          <span className="flex flex-col items-end gap-y-2">
            <span className="flex gap-x-1 text-color3">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="font-bold">({thousands(city.wedding_package_count)})</span>
          </span>
        </div>

        <WeddingPackageSlider data={city.wedding_packages} />
      </section>

      <section className="container mx-auto flex flex-col">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-3xl font-bold max-w-md text-center">Browse Our Best Selection Wedding Packages</h2>
        </div>

        <WeddingPackageGrid data={city.wedding_packages} />
      </section>

      <section className="flex flex-col">
        <div className="container mx-auto flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold max-w-xs">Happy Stories of Our Wedding</h2>
          <Link href={`${process.env.HOST_APP}/testimonials`} className="border border-dark1 px-5 py-3 text-center rounded-full font-semibold">Explore All</Link>
        </div>

        <Testimonials />
      </section>
    </main>
  )
}

export default DetailsCityPage;
