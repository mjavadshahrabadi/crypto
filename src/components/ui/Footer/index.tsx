import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const Footer: FC = (): ReactElement => {
  return (
    <footer className="relative grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 dark:card_glass__dark bg-slate-50 shadow-sm mt-20 lg:place-items-center gap-10 rounded-md">
      <div className="flex flex-col items-end space-y-6 -order-4 lg:order-4 text-right w-full">
        <div className="flex space-x-3 items-center">
          <h3>لوگو</h3>
          <div className="w-[38px] h-[38px] relative">
            <Image src="/img/logo.png" alt="logo" fill />
          </div>
        </div>
        <h4 className="dark:text-slate-200 text-gray-700 text-lg">
          به خبرنامه ما بپیوندید
        </h4>
        <div className="relative w-full dark:bg-gray-800 rounded-md shadow-sm opacity-80">
          <input
            type="text"
            className="dark:bg-transparent bg-gray-200 rounded-md p-4 focus:outline-0 dark:text-slate-200 text-gray-700 text-[14px] text-right w-full"
            placeholder="ایمیل خود را وارد کنید"
          />
          <button className="p-2 bg-indigo-500 text-slate-200 font-semibold active:scale-90 rounded-md absolute left-2 top-[9px] hover:bg-indigo-600 text-[14px]">
            پیوستن
          </button>
        </div>
        <p className="dark:text-slate-200 text-gray-700 text-sm">
          ما فقط ایمیل های جالب و مرتبط ارسال می کنیم
        </p>
      </div>
      <div className="flex flex-col space-y-6 place-self-start order-3  w-full text-center">
        <h3 className="dark:text-slate-200 text-gray-700 font-semibold tracking-wide text-lg">
          پیوندها
        </h3>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          صفحه اصلی
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          قیمت گذاری
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          درباره ما
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          فرصت های شغلی
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          امکانات
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          دمو محصول
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">بلاگ</h5>
      </div>
      <div className="flex flex-col space-y-6 place-self-start order-2  w-full text-center">
        <h3 className="dark:text-slate-200 text-gray-700 font-semibold tracking-wide text-lg">
          حقوقی
        </h3>

        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          شرایط استفاده
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          شرایط و ضوابط
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          سیاست حفظ حریم خصوصی
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          خط مشی کوکی
        </h5>
      </div>
      <div className="flex flex-col space-y-6 place-self-start w-full text-center">
        <h3 className="dark:text-slate-200 text-gray-700 font-semibold tracking-wide text-lg">
          محصولات
        </h3>

        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          از تور استفاده کنید
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          چت زنده
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          اجتماعی
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          تلفن همراه
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">
          همکاری
        </h5>
        <h5 className="dark:text-slate-400 text-gray-600 text-[15px]">نظرات</h5>
      </div>

      <div className="absolute -top-20 -right-20 rounded-full hidden xl:block lg:w-40 lg:h-40 bg-gradient-to-tr from-indigo-500 to-pink-500 opacity-80" />
    </footer>
  )
}
