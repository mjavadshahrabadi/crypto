import React, { FC, ReactElement } from 'react'
import { WhyUsItem } from '@/components/whyus/WhyUsItem'

export const WhyUsList: FC = (): ReactElement => {
  return (
    <ul className="flex flex-col space-y-6 w-full pt-6">
      <WhyUsItem content="بهترین داده های فناوری جهان و مورد اعتماد بیش از 10 میلیون کاربر در سراسر جهان از سال 2008" />
      <WhyUsItem content="ما بهترین قیمت در بازار را بدون هزینه یا اشتراک اضافی ارائه می دهیم" />
      <WhyUsItem content="ما تیمی از متخصصین داریم که به صورت 24 ساعته و 7 روز هفته از شما پشتیبانی می کنند" />
    </ul>
  )
}
