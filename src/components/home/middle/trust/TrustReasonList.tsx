import React, { FC, ReactElement } from 'react'
import { TrustReasonItem } from '@/components/home/middle/trust/TrustReasonItem'

export const TrustReasonList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 justify-items-stretch lg:grid-cols-3 place-items-center mt-16">
      <TrustReasonItem
        imgSrc="/img/trust-1.webp"
        title="بهترین نرخ ارز"
        description="خرید و فروش ارزهای دیجیتال محبوب، آنها را در یک مکان پیگیری کنید"
      />
      <TrustReasonItem
        imgSrc="/img/trust-2.webp"
        title="توسط بیمه محافظت می شود"
        description="با برنامه ریزی خرید روزانه، هفتگی یا ماهانه، به آرامی روی ارزهای دیجیتال سرمایه گذاری کنید"
      />
      <TrustReasonItem
        imgSrc="/img/trust-3.webp"
        title="ذخیره سازی امن"
        description="برای امنیت بیشتر، وجوه خود را با برداشت با تأخیر زمانی در یک صندوق ذخیره کنید"
      />
    </ul>
  )
}
