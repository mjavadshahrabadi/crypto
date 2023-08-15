import React, { FC, ReactElement } from 'react'

import { DownloadLinkBtn } from '@/components/contact/DownloadLinkBtn'
export const ContactContainer: FC = (): ReactElement => {
  return (
    <div className="flex flex-col space-y-6 text-center mt-20">
      <h3 className="dark:text-slate-200 text-gray-700 font-semibold text-5xl">
        برای <span className="text-pink-500">شروع</span> آماده شوید
      </h3>
      <h5 className="dark:text-slate-400 text-gray-600">
        برنامه موبایل ما را دانلود کنید و{' '}
        <span className="text-pink-500 font-semibold">تجارت</span> را شروع کنید
        و <span className="text-pink-500 font-semibold">درآمد</span> کسب کنید
      </h5>
      <DownloadLinkBtn />
    </div>
  )
}
