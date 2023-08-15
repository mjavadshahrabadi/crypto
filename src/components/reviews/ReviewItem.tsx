import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { StarIcon as SolidStar } from '@heroicons/react/24/solid'

interface IReviewItem {
  logoSrc: string
  content: string
  quality: number
}
export const ReviewItem: FC<IReviewItem> = ({
  logoSrc,
  content,
  quality,
}): ReactElement => {
  return (
    <li className="dark:card_glass__dark bg-slate-50 p-6 rounded-md flex flex-col items-center lg:items-end justify-items-stretch space-y-8">
      <div className="w-[150px] h-[40px] relative">
        <Image src={logoSrc} alt={`logo+${Math.random()}`} fill />
      </div>
      <p className="dark:text-slate-200 text-gray-700 text-[15px] text-right">
        {content}
      </p>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <SolidStar className="text-yellow-500 w-5 h-5" />
          <SolidStar className="text-yellow-500 w-5 h-5" />
          <SolidStar className="text-yellow-500 w-5 h-5" />
          <SolidStar className="text-yellow-500 w-5 h-5" />
          <SolidStar className="text-yellow-500 w-5 h-5" />
        </div>
        <h5 className="dark:text-slate-200 text-gray-700 text-[15px] tracking-wide">
          کیفیت و هزینه: {quality}/5
        </h5>
      </div>
    </li>
  )
}
