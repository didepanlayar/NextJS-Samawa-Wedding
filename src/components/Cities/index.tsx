import React from 'react';
import { TCity } from './types';
import { getData } from './actions';
import Image from 'next/image';
import Link from 'next/link';
import thousands from '@/libs/thousands';

type Props = {}

function Content({ data }: { data: TCity[] }) {
  return (
    <div className="grid grid-cols-3 gap-7">
      {
        data.map(city => {
          return (
            <div className="flex border border-transparent hover:border-color2 transition-colors duration-300 bg-light1 p-5 rounded-3xl items-center gap-x-5 relative" key={city.id}>
              <span className="relative w-[80px] aspect-square rounded-3xl overflow-hidden">
                <Image fill className="w-full h-full object-cover absolute" src={`${process.env.HOST_API}/storage/${city.icon}`} alt={city.name} />
              </span>
              <span className="flex flex-col">
                <span className="text-xl font-bold">{city.name}</span>
                <span className="">{thousands(city.wedding_package_count)} Package{city.wedding_package_count > 1 && "s"}</span>
              </span>
              <Link href={`/cities/${city.slug}`} className="absolute inset-0"></Link>
            </div>
          )
        })
      }
    </div>
  )
}

async function Cities({ }: Props) {
  const { data }: { data: TCity[] } = await getData();

  if (data.length === 0) {
    return "Data"
  }

  return <Content data={data} />
}

export default Cities
