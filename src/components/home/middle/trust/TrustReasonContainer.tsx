import React, { FC, ReactElement } from 'react'
import { TrustReasonList } from '@/components/home/middle/trust/TrustReasonList'

export const TrustReasonContainer: FC = (): ReactElement => {
  return (
    <div className="my-20">
      <div>
        <h2 className="font-semibold dark:text-slate-200 text-center text-4xl">
          پلتفرم <span className="text-pink-500">کریپتو</span> قابل اعتماد
        </h2>
        <h4 className="dark:text-slate-200 m-4 text-center text-[15px]">
          کریپتولند دارای ویژگی های مختلفی است که آن را به بهترین مکان برای شروع
          تجارت تبدیل می کند
        </h4>
      </div>
      <TrustReasonList />
    </div>
  )
}
