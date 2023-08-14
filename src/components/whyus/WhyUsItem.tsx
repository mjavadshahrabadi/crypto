import React, { FC, ReactElement } from 'react'
import { ShieldCheckIcon } from '@heroicons/react/24/solid'

interface IWhyUsItem {
  content: string
}
export const WhyUsItem: FC<IWhyUsItem> = ({ content }): ReactElement => {
  return (
    <li className="w-full p-4 rounded-md dark:card_glass__dark bg-slate-50 shadow-sm flex items-center text-right justify-end space-x-2 hover:scale-95 duration-200 ease-out">
      <p className="text-[15px] dark:text-slate-300 text-gray-800">{content}</p>
      <ShieldCheckIcon className="text-green-500 w-8 h-8" />
    </li>
  )
}
