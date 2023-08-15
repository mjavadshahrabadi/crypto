import React, { FC, ReactElement } from 'react'
import { QuestionAndAnswerList } from '@/components/f&q/QuestionAndAnswerList'

export const QuestionAndAnswerContainer: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 mt-24 lg:mt-32 gap-10 lg:gap-2">
      <div className="order-1 lg:-order-2">
        <QuestionAndAnswerList />
      </div>
      <div className="flex flex-col items-end space-y-6">
        <h2 className="dark:text-slate-200 text-gray-700 font-semibold text-4xl text-right">
          هر <span className="text-pink-500">سوالی</span> دارید؟ پاسخ ها را در
          اینجا بیابید
        </h2>
        <h4 className="dark:text-slate-400 text-gray-700 text-sm">
          پاسخ خود را در اینجا پیدا نمی کنید؟ فقط برای هر سوالی به ما پیام دهید
        </h4>

        <button
          type="button"
          className="py-2 px-6 rounded-md border-2 border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-slate-100 duration-200 ease-out active:scale-90"
        >
          تماس با ما
        </button>
      </div>
    </div>
  )
}
