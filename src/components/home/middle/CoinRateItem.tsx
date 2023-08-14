import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface ICoinRateItem {
  imgSrc: string
  title: string
}

export const CoinRateItem: FC<ICoinRateItem> = ({
  imgSrc,
  title,
}): ReactElement => {
  return (
    <li className="h-[120px] lg:h-[130px] w-full relative object-contain border-b lg:border-b-0 lg:border-r last-of-type:border-none border-slate-400">
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="px-4 first-of-type::px-0 pb-3 lg:pb-0"
      />
    </li>
  )
}
