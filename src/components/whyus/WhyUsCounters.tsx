import React, { FC, ReactElement } from 'react'
import { CounterItem } from '@/components/whyus/CounterItem'

export const WhyUsCounters: FC = (): ReactElement => {
  return (
    <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 items-center justify-between mt-20">
      <CounterItem value={2500} description="حجم معاملات تجمعی" />
      <CounterItem value={20} description="پوشش بیمه ای میلیونی" />
      <CounterItem value={120} description="کشورها و مناطق" />
    </div>
  )
}
