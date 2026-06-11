import { PreventScrolling, RouterBack } from '@/components/Modal'
import React from 'react'
import Bonus from './Bonus'

type Request = {
  searchParams: {
    modal: string
    [key: string]: string
  }
}

const page = (request: Request) => {

  if (request.searchParams.modal && request.searchParams.modal !== "") {
    return <>
      <div className="fixed bg-black/80 z-50 inset-0 flex items-center justify-center">
        <div className="bg-white max-w-xl p-4 rounded-2xl min-h-44 relative z-20">
          {/* catch searchParams here to render modal */}
          {
            request.searchParams.modal == "bonus" && <Bonus bonusId={request.searchParams.bonusId} slugPackage={request.searchParams.slugPackage} />
          }
        </div>
        <RouterBack />
      </div>
      <PreventScrolling />
    </>
  }

  return (
    null
  )
}

export default page
