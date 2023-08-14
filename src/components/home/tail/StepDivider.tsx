import React, { FC, ReactElement } from 'react'
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export const StepDivider: FC = (): ReactElement => {
  return (
    <>
      <div className="lg:border-l border-slate-600 h-[200px] bg-red-300 w-fit mx-6 relative z-30 hidden lg:block">
        <span className="dark:border dark:border-slate-600 rounded-full p-1 absolute dark:bg-secondary bg-gray-300 top-[4.70rem] -left-5 z-50 hidden lg:block">
          <ChevronRightIcon className=" w-7 h-7 dark:text-slate-200 text-gray-600" />
        </span>
      </div>
      <div className="dark:border dark:border-slate-600 rounded-full p-1 z-50 block lg:hidden dark:bg-secondary bg-gray-300 animate-bounce my-8">
        <ChevronDownIcon className="w-7 h-7 dark:text-slate-200 block text-gray-600" />
      </div>
    </>
  )
}
