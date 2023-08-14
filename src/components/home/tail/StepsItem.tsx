import React, { FC, ReactElement } from 'react'

interface IStepsItem {
  icon: ReactElement
  title: string
  description: string
}

export const StepsItem: FC<IStepsItem> = (props): ReactElement => {
  const { description, title, icon } = props
  return (
    <li className="flex flex-col items-center lg:items-end space-y-4">
      {icon}
      <h4 className="mt-4 dark:text-slate-200 text-gray-700 font-semibold">
        {title}
      </h4>
      <p className="text-right dark:text-slate-400 text-gray-600 text-[15px]">
        {description}
      </p>
    </li>
  )
}
