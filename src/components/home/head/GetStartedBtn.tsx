import React, { FC, ReactElement } from 'react'

export const GetStartedBtn: FC = (): ReactElement => {
  return (
    <button
      type="button"
      className="hidden lg:block text-white text-[15px] font-semibold bg-indigo-500 py-1.5 px-6 rounded-md hover:scale-110 active:scale-100 duration-200 ease-out tracking-wide"
    >
      شروع کن
    </button>
  )
}
