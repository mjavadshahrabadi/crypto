import React, { FC, ReactElement } from 'react'
import Link from 'next/link'

interface IMenuItem {
  content: string
  linkSrc: string
  icon?: ReactElement
}

export const MenuItem: FC<IMenuItem> = ({
  content,
  icon,
  linkSrc,
}): ReactElement => {
  return (
    <Link href={linkSrc}>
      <div className="text-right hover:bg-indigo-500 p-4 rounded-md cursor-pointer hover:text-slate-100 duration-200 ease-out font-semibold flex items-center justify-end group">
        <h3 className="truncate rounded-[5px] px-2 text-[0.875rem]">
          {content}
        </h3>
        {icon}
      </div>
    </Link>
  )
}
