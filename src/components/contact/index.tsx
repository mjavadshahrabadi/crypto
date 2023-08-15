import React, { FC, ReactElement } from 'react'
import { ContactContainer } from '@/components/contact/ContactContainer'

export const ContactSection: FC = (): ReactElement => {
  return (
    <section>
      <ContactContainer />
    </section>
  )
}
