import React, { FC, ReactElement } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

interface IGetStartedBtn {
  open: boolean
  toggleHandler: () => void
}

export const Hamburger: FC<IGetStartedBtn> = ({
  toggleHandler,
}): ReactElement => {
  return (
    <div className="cursor-pointer lg:hidden" onClick={toggleHandler}>
      <Bars3Icon className={`w-10 h-10 dark:text-gray-200 text-gray-800`} />
    </div>
  )
}
