import Header from '@/components/Header';
import React from 'react';
import Star from '@/assets/images/star.svg';
import Pinpoint from '@/assets/images/pinpoint.svg';
import CheckmarkCircle from '@/assets/images/checkmark-circle.svg';
import { Metadata, ResolvingMetadata } from 'next';
import thousands from '@/libs/thousands';
import { WeddingPackageGrid, WeddingPackageSlider } from '@/components/WeddingPackages';
import Link from 'next/link';
import { Content as Testimonials } from '@/components/Testimonials';
import { TPackage } from '@/components/WeddingPackages/types';

type Request = {
  params: {
    packageSlug: string,
  }
};

async function getData(slug: string) {
  try {
    const req = await fetch(`${process.env.HOST_API}/api/wedding-package/${slug}`, {
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
  const { packageSlug } = params
  const { data: wedding }: { data: TPackage } = await getData(packageSlug)
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: wedding.name,
    openGraph: {
      images: [`${process.env.HOST_API}/storage/${wedding.thumbnail}`],
    },
  }
}

async function DetailsPackagePage({ params }: Request) {
  const { data: wedding }: { data: TPackage } = await getData(params.packageSlug)
  return (
    <main className="flex flex-col gap-y-8 relative pb-16">
      <Header />

      <section className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <span className="flex flex-col">
            <h2 className="text-3xl font-bold">{wedding.name}</h2>
            <span className="flex gap-x-2 items-center">
              <Pinpoint />
              {wedding.city.name}
            </span>
          </span>
          <span className="flex flex-col items-end gap-y-2">
            <span className="flex gap-x-1 text-color3">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </span>
            <span className="font-bold">({thousands(wedding.wedding_testimonials.length)})</span>
          </span>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="flex gap-x-8">
          <div className="w-8/12 flex flex-col gap-y-7">
            <div className="flex flex-col">
              <h6 className="font-bold text-xl">It's a Good Package</h6>
              <p className="leading-normal">{wedding.about}</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <h6 className="font-bold text-xl">Wedding Testimonials</h6>
                <Link href="/testimonials" className="border border-dark1 px-5 py-3 rounded-full font-semibold"> View Details </Link>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {
                  wedding.wedding_testimonials.map(testimonial => {
                    return <Testimonials data={testimonial} key={testimonial.id} />
                  })
                }
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="sticky top-8">
              <div className="border p-7 flex flex-col gap-y-5 rounded-2xl">
                <h6 className="text-3xl text-color2 font-bold">Rp {thousands(wedding.price)}</h6>
                <hr />
                <ul className="flex flex-col gap-y-5 list-none">
                  <li className="flex gap-x-3">
                    <CheckmarkCircle className="text-color2" />
                    <span className="">Lorem ipsum dolor si amet nikah berkah dunia kita</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckmarkCircle className="text-color2" />
                    <span className="">Lorem ipsum dolor si amet nikah berkah dunia kita</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckmarkCircle className="text-color2" />
                    <span className="">Lorem ipsum dolor si amet nikah berkah dunia kita</span>
                  </li>
                </ul>
                <hr />
                <h6 className="font-bold">Wedding Organizer</h6>
                <hr />
                <Link href={`/package/${wedding.slug}/checkout`} className="flex justify-center bg-color2 py-4 w-full text-light1 rounded-full">Choose This Package</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailsPackagePage;
