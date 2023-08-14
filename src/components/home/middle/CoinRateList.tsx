import React, { FC, ReactElement } from 'react'
import { CoinRateItem } from '@/components/home/middle/CoinRateItem'

export const CoinRateList: FC = (): ReactElement => {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 dark:bg-gray-800 bg-gray-700 px-6 py-10 rounded-md shadow-md divider gap-6">
      <CoinRateItem imgSrc="/img/btc.webp" title="bitcoin" />

      <CoinRateItem imgSrc="/img/desh.webp" title="desh" />

      <CoinRateItem imgSrc="/img/meta.webp" title="meta" />
    </ul>
  )
}
