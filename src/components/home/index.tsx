import { FC, ReactElement } from 'react'
import { Navbar } from '@/components/home/head/Navbar'
import { Menu } from '@/components/home/head/Menu'

export const HomeSection: FC = (): ReactElement => {
  return (
    <section className="max-w-7xl mx-auto py-6 px-4 xl:px-0">
      <Navbar />
    </section>
  )
}
