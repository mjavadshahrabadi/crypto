import { FC, ReactElement } from 'react'

import { Jumbotron } from '@/components/home/middle/Jumbotron'
import { CoinRateList } from '@/components/home/middle/CoinRateList'
import { TrustReasonContainer } from '@/components/home/middle/trust/TrustReasonContainer'
import { HowWorkContainer } from '@/components/home/tail/HowWorkContainer'
export const HomeSection: FC = (): ReactElement => {
  return (
    <section>
      <Jumbotron />
      <CoinRateList />
      <TrustReasonContainer />
      <HowWorkContainer />
    </section>
  )
}
