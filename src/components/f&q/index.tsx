import React, { FC, ReactElement } from 'react'
import { QuestionAndAnswerContainer } from '@/components/f&q/QuestionAndAnswerContainer'

export const QuestionAndAnswerSection: FC = (): ReactElement => {
  return (
    <section>
      <QuestionAndAnswerContainer />
    </section>
  )
}
