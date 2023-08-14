import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
interface ITrustReasonItem {
  imgSrc: string
  title: string
  description: string
}
export const TrustReasonItem: FC<ITrustReasonItem> = ({
  title,
  description,
  imgSrc,
}): ReactElement => {
  return (
    <li className="dark:card_glass__dark card_glass__light p-8 lg:p-6 flex flex-col cursor-pointer hover:lg:scale-110 duration-200 ease-out shadow:lg bg-white">
      <div className="w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] relative mx-auto">
        <Image src={imgSrc} alt={title} fill />
      </div>
      <h3 className="text-lg dark:text-slate-100 text-gray-700 font-semibold text-center mt-4">
        {title}
      </h3>
      <h5 className="text-slate-400 text-[15px] mt-8 text-center">
        {description}
      </h5>

      <ArrowRightIcon className="w-8 h-8 text-gray-400 dark:text-slate-400 mt-8 place-self-center animate-pulse" />
    </li>
  )
}
