import React, { FC, ReactElement } from 'react'
import { BlogPostsList } from '@/components/blog/BlogPostsList'

export const BlogContainer: FC = (): ReactElement => {
  return (
    <div className="mt-20">
      <h3 className="dark:text-slate-200 text-gray-700 font-semibold text-center text-4xl">
        <span className="text-pink-500">داستان</span> درونی
      </h3>
      <BlogPostsList />

      <p className="dark:text-slate-200 text-gray-700 text-center mt-10">
        می خواهید بیشتر بیاموزید؟{' '}
        <span className="text-pink-500 cursor-pointer hover:text-pink-400 duration-200 ease-out  font-semibold">
          برو به وبلاگ
        </span>
      </p>
    </div>
  )
}
