'use client'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Ripples from 'react-ripples'
import { StarIcon as FillStatIcon } from '@heroicons/react/24/solid'
import { StarIcon as EmptyStartIcon } from '@heroicons/react/24/outline'

export const Jumbotron: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
      <div className="w-full">
        <div className="lg:h-[500px] xl:h-[600px] h-[300px] lg:w-[500px] w-[300px] xl:w-[600px] relative mx-auto">
          <Image src="/img/crypto-bank.webp" alt="crypto-back" fill />
        </div>
      </div>
      <div className="w-full grid place-self-center">
        <h2 className="text-3xl lg:text-5xl mt-8 lg:mt-0 dark:text-slate-200 tracking-wide font-semibold text-right">
          بازار{' '}
          <span
            className="text-pink-500 font-semibold
          "
          >
            کریپتو
          </span>{' '}
          قابل اعتماد و ایمن
        </h2>
        <p className="dark:text-slate-200 text-right my-8">
          از قبل یک وب سایت دارید؟ میزبانی ما را امتحان کنید تا با زمان بارگذاری
          .پیشرو در صنعت و عملکرد فوق العاده آن را زنده کند
        </p>
        <Ripples className="rounded-md bg-indigo-500 text-slate-200 font-semibold  p-2 lg:w-fit place-self-end">
          <button type="button">شروع تجارت</button>
        </Ripples>

        <div className="lg:grid place-self-end mt-8 hidden">
          <div className="flex items-center justify-center">
            <FillStatIcon className="w-5 h-5 text-yellow-500" />
            <FillStatIcon className="w-5 h-5 text-yellow-500" />
            <FillStatIcon className="w-5 h-5 text-yellow-500" />
            <FillStatIcon className="w-5 h-5 text-yellow-500" />
            <EmptyStartIcon className="w-5 h-5 text-yellow-500" />
            <small className="dark:text-slate-200 text-gray-800 ml-2">
              میانگین امتیاز 4.8 ما را به یکی از بهترین برنامه های جهان تبدیل می
              کند
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}
