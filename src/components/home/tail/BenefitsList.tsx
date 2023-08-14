import React, { FC, ReactElement } from 'react'
import { BenefitsItem } from '@/components/home/tail/BenefitsItem'

export const BenefitsList: FC = (): ReactElement => {
  return (
    <ul className="flex flex-col items-end space-y-6">
      <BenefitsItem title="نرخ ارز جهانی" />
      <BenefitsItem title="با حواله بانکی پرداخت کنید" />
      <BenefitsItem title="تراکنش فوری" />
    </ul>
  )
}
