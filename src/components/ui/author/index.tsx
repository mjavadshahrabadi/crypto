'use client'
import React, { FC, ReactElement } from 'react'
import { TypeAnimation } from 'react-type-animation'
export const Author: FC = (): ReactElement => {
  return (
    <div className="my-10 text-center dark:text-slate-300 text-gray-700 w-full">
      ©️ {new Date().getFullYear()} -{' '}
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'javad shahrabadi❤️',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'Nextjs + Typescript + Tailwindcss🚀',
          1000,
          'm.javadshahrabadi@gmail.com',
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '15px', display: 'inline-block' }}
        repeat={Infinity}
      >
        <input
          type="text"
          className="bg-transparent dark:placeholder-slate-300 placeholder-gray-700"
        />
      </TypeAnimation>
    </div>
  )
}
