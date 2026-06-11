import { RouterBack } from '@/components/Modal'
import { TPackage } from '@/components/WeddingPackages/types'
import thousands from '@/libs/thousands'
import Image from 'next/image'
import React from 'react'

type Props = {
  bonusId: string,
  slugPackage: string
}

async function getData(slug: string) {
  try {
    const req = await fetch(`${process.env.HOST_API}/api/wedding-package/${slug}`, {
      method: "GET",
    })

    return req.json();
  } catch (error) {
    console.log(error);
  }
}

async function Bonus({ bonusId, slugPackage }: Props) {
  const { data: wedding }: { data: TPackage } = await getData(slugPackage);
  const bonus = wedding.wedding_bonus_packages.find(bonus_package => bonus_package.id === Number(bonusId))

  return (
    <div className="flex flex-col gap-y-5">
      <span className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <Image fill className="w-full h-full object-cover absolute" src={`${process.env.HOST_API}/storage/${bonus?.bonus_package.thumbnail}`} alt={bonus?.bonus_package.name || "Bonus Thumbnail"} />
      </span>
      <hr />
      <div className="flex flex-col">
        <h6 className="text-xl font-bold">{bonus?.bonus_package.name}</h6>
        <span className="flex gap-x-2">
          <span className="text-color2">
            <span className="font-semibold"> Rp 0 </span>
            <span className=""> /package </span>
          </span>
          <span className="line-through">Rp {thousands(bonus?.bonus_package.price)}</span>
        </span>
      </div>
      <hr />
      <div className="flex flex-col">
        <h6 className="font-bold text-xl">About</h6>
        <p className="leading-normal">{bonus?.bonus_package.about}</p>
      </div>
      <hr />
      <span className="flex">
        <RouterBack className='border border-dark1 px-5 py-3 rounded-full font-semibold cursor-pointer'>Close Details</RouterBack>
      </span>
    </div>
  )
}

export default Bonus