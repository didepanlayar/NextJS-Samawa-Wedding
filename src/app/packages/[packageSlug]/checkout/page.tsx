import Header from '@/components/Header'
import { TPackage } from '@/components/WeddingPackages/types'
import React from 'react'
import { getData } from '../actions'
import Image from 'next/image';
import thousands from '@/libs/thousands';
import { Content as Testimonials } from '@/components/Testimonials';
import { Content as WeddingOrganizers } from '@/components/WeddingOrganizers';

type Request = {
  params: {
    packageSlug: string,
  }
};

async function PackageCheckoutPage({ params }: Request) {
  const { data: wedding }: { data: TPackage } = await getData(params.packageSlug)
  return (
    <main className="flex flex-col gap-y-8 relative py-8 bg-light2">
      <Header hasPadding />

      <section className="container mx-auto flex flex-col gap-y-4">
        <h2 className="text-3xl font-bold">Checkout Package</h2>

        <div className="flex gap-x-12">
          <div className="w-8/12"></div>

          <div className="w-4/12">
            <div className="sticky top-8">
              <div className="bg-light1 p-7 flex flex-col gap-y-5 rounded-2xl">
                <h6 className="text-2xl font-bold">{wedding.name}</h6>
                <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
                  <Image fill className="w-full h-full object-cover absolute" src={`${process.env.HOST_API}/storage/${wedding.thumbnail}`} alt={wedding.name} />
                </span>

                <h6 className="text-2xl text-color2 font-bold">Rp {thousands(wedding.price)}</h6>
                <hr />
                <h6 className="font-bold">Happy Story</h6>
                {
                  wedding.wedding_testimonials.length > 0 ? <Testimonials data={wedding.wedding_testimonials[0]} /> : "Belum ada testimonial"
                }

                <hr />
                <h6 className="font-bold">Wedding Organizer</h6>
                <WeddingOrganizers data={wedding.wedding_organizer} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PackageCheckoutPage
