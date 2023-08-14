'use client'
import React, { FC, ReactElement } from 'react'
import CountUp from 'react-countup'

interface ICounterItem {
  value: number
  description: string
}
export const CounterItem: FC<ICounterItem> = ({
  value,
  description,
}): ReactElement => {
  return (
    <div className="flex flex-col items-center space-y-6 lg:space-y-0">
      <h4 className="md:text-lg lg:text-7xl font-semibold text-pink-500 flex items-center justify-center">
        <CountUp
          duration={10}
          className="text-pink-500 text-7xl font-semibold"
          end={value}
        />
        +
      </h4>
      <p className="dark:text-slate-200 text-gray-700 font-semibold lg:text-lg pt-2">
        {description}
      </p>
    </div>
  )
}
