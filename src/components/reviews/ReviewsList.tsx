import React, { FC, ReactElement } from 'react'
import { ReviewItem } from '@/components/reviews/ReviewItem'

export const ReviewsList: FC = (): ReactElement => {
  return (
    <ul className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      <ReviewItem
        logoSrc="/img/pinpoint.webp"
        content="دقیقاً همان چیزی است که کسب و کار ما فاقد آن بوده است. اگر بازاریابی واقعی را می خواهید که کارآمد و موثر باشد. من عاشق کریپتولند هستم"
        quality={5.0}
      />
      <ReviewItem
        logoSrc="/img/sitemark.webp"
        content="من هر روز بیشتر و بیشتر از کریپتولند را دوست دارم زیرا زندگی من را بسیار آسان می کند. دقیقا همان چیزی است که به دنبالش بودم. من از کیفیت کریپتولند شگفت زده شدم"
        quality={5.0}
      />
      <ReviewItem
        logoSrc="/img/minty.webp"
        content="نمیدونم دیگه چی بگم وای، چه خدمات عالی، من آن را دوست دارم! کریپتولند با ارزش ترین منبع تجاری است که ما تا به حال خریداری کرده ایم."
        quality={5.0}
      />
    </ul>
  )
}
