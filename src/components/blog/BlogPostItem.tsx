import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface IBlogPostItem {
  imgSrc: string
  title: string
  gradientStyle: string
}
export const BlogPostItem: FC<IBlogPostItem> = ({
  imgSrc,
  title,
  gradientStyle,
}): ReactElement => {
  return (
    <li className="z-10 relative w-[350px] h-[350px] md:w-[50px] md:h-[400px] lg:w-[580px] lg:h-[420px]  mt-14 rounded-md p-4 mx-auto">
      <div className="w-full h-full relative mx-auto">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain hover:scale-125"
        />
      </div>
      <div
        className={`absolute inset-0 w-full h-full z-20  opacity-70 rounded-xl ${gradientStyle}`}
      />
      <div className="absolute z-30 bottom-6 right-5 text-right">
        <h3 className="text-slate-100 font-semibold text-2xl">{title}</h3>
        <p className="text-slate-100 mt-5 cursor-pointer hover:text-slate-300 duration-200 ease-out text-sm">
          ...مطالعه بیشتر
        </p>
      </div>
    </li>
  )
}
