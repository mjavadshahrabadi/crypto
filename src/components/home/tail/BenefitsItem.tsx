import React, { FC, ReactElement } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

interface IBenefitsItems {
  title: string
}
export const BenefitsItem: FC<IBenefitsItems> = ({ title }): ReactElement => {
  return (
    <li className="flex items-end justify-center">
      <p className="inline-block dark:text-slate-200 text-gray-700 mr-2">
        {title}
      </p>
      <ShieldCheckIcon className="inline w-7 h-7 text-green-500" />
    </li>
  )
}
