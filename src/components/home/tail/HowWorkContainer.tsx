'use client'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { BenefitsList } from '@/components/home/tail/BenefitsList'
import Ripples from 'react-ripples'
import { StepsList } from '@/components/home/tail/StepsList'
export const HowWorkContainer: FC = (): ReactElement => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 pt-20">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] xl:w-[600px] xl:h-[600px] relative mx-auto">
          <Image src="/img/wallet.webp" alt="wallet" fill />
        </div>
        <div className="flex flex-col items-end justify-center space-y-6 mt-14 lg:mt-0">
          <h4 className="dark:text-slate-400 text-gray-800 dark:font-semibold font-bold">
            چگونه کار می کند
          </h4>
          <h2 className="dark:text-slate-200 text-gray-700 font-semibold text-3xl text-right">
            <span className="text-pink-500">کریپتو</span> را آسان و بدون سر و
            صدا بخرید
          </h2>
          <p className="dark:text-slate-400 text-gray-700 text-[15px] text-right">
            حساب بانکی خود را پیوند دهید و بیت کوین خود را در چند دقیقه دریافت
            کنید. فوق العاده آسان و سریع است
          </p>
          <BenefitsList />
          <Ripples className="rounded-md bg-indigo-500 text-slate-200 font-semibold  p-2 lg:w-fit place-self-end">
            <button type="button">شروع تجارت</button>
          </Ripples>
        </div>
      </div>
      <StepsList />
    </>
  )
}
