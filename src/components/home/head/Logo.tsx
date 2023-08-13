import Image from 'next/image'
import React, { ReactElement, FC } from 'react'

export const CompanyLogo: FC = (): ReactElement => {
  return <Image src="/img/logo.png" width={38} height={38} alt="company-logo" />
}
