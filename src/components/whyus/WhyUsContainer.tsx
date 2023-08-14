import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { WhyUsList } from '@/components/whyus/WhyUsList'
import { WhyUsCounters } from '@/components/whyus/WhyUsCounters'
export const WhyUsContainer: FC = (): ReactElement => {
  return (
    <>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 grid-rows-1 jusstify-between place-items-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] relative mx-auto">
          <Image src="/img/collaborate.webp" alt="collaboration" fill />
        </div>
        <div className="flex flex-col space-y-6 items-end mt-8 lg:mt-0">
          <h4 className="lg:text-lg dark:text-slate-200 text-gray-700 font-semibold">
            چرا ما را انتخاب کنید؟
          </h4>
          <h2 className="md:text-2xl lg:text-3xl dark:text-slate-200 text-gray-700 font-semibold">
            چرا ما را برای <span className="text-pink-500">کسب و کار</span> خود
            انتخاب کنید
          </h2>
          <WhyUsList />
        </div>
      </div>
      <WhyUsCounters />
    </>
  )
}
