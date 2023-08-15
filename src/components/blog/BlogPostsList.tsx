import React, { FC, ReactElement } from 'react'
import { BlogPostItem } from '@/components/blog/BlogPostItem'

export const BlogPostsList: FC = (): ReactElement => {
  return (
    <ul className="grid-rows-1 grid-cols-1 grid lg:grid-cols-2 gap-2 lg:gap-10">
      <BlogPostItem
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        imgSrc="/img/wallet.webp"
        gradientStyle="bg-gradient-to-tr from-fuchsia-500 to-teal-500"
      />
      <BlogPostItem
        title="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
        imgSrc="/img/crypto-bank.webp"
        gradientStyle="bg-gradient-to-tr from-pink-500 to-amber-500"
      />
    </ul>
  )
}
