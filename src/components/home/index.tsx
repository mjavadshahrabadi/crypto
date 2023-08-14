import { FC, ReactElement } from 'react'
import { Navbar } from '@/components/home/head/Navbar'
import { Menu } from '@/components/home/head/Menu'
import { Jumbotron } from '@/components/home/middle/Jumbotron'
import { CoinRateList } from '@/components/home/middle/CoinRateList'
import { TrustReasonContainer } from '@/components/home/middle/trust/TrustReasonContainer'
export const HomeSection: FC = (): ReactElement => {
  return (
    <section className="">
      <Navbar />
      <Jumbotron />
      <CoinRateList />
      <TrustReasonContainer />
    </section>
  )
}
