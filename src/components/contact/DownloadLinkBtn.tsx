import React, { FC, ReactElement } from 'react'
import { Apple, GooglePlay } from 'react-bootstrap-icons'
export const DownloadLinkBtn: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center space-x-6 pt-4">
      <div className="flex items-center space-x-3 dark:card_glass__dark cursor-pointer py-2 px-4 active:scale-90 group duration-300 bg-slate-50 rounded-md shadow-sm">
        <Apple className="w-7 h-7 text-gray-700 group-hover:text-pink-500" />

        <div className="flex flex-col space-y-1 items-start">
          <small className="text-xs dark:text-slate-300 group-hover:text-pink-500">
            Download on the
          </small>
          <h3 className="dark:text-slate-200 text-gray-700 group-hover:text-pink-500">
            App store
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-3 dark:card_glass__dark py-2 px-4 cursor-pointer  active:scale-90 group bg-slate-50 rounded-md shadow-sm">
        <GooglePlay className="w-7 h-7 text-gray-700 group-hover:text-pink-500" />

        <div className="flex flex-col space-y-1 items-start">
          <small className="text-xs dark:text-slate-300 group-hover:text-pink-500">
            Get it on
          </small>
          <h3 className="dark:text-slate-200 text-gray-700 group-hover:text-pink-500">
            Google play
          </h3>
        </div>
      </div>
    </div>
  )
}
