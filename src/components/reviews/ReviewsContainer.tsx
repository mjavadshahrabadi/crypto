import React, { FC, ReactElement } from 'react'
import { ReviewsList } from '@/components/reviews/ReviewsList'

export const ReviewsContainer: FC = (): ReactElement => {
  return (
    <div className="mt-16 lg:mt-24 text-center">
      <h4 className="text-[15px] dark:text-slate-400 text-gray-700 font-semibold">
        نظرات
      </h4>
      <h2 className="text-3xl mt-4 dark:text-slate-100 text-gray-700 font-semibold">
        مورد اعتماد <span className="text-pink-500">هزاران</span> نفر
      </h2>
      <ReviewsList />
    </div>
  )
}
