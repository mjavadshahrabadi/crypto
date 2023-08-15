import React, { FC, ReactElement } from 'react'
import { ReviewsContainer } from '@/components/reviews/ReviewsContainer'

export const ReviewsSection: FC = (): ReactElement => {
  return (
    <section>
      <ReviewsContainer />
    </section>
  )
}
