'use client'
import React, { FC, ReactElement, useCallback, useState } from 'react'
import { CompanyLogo } from '@/components/home/head/Logo'
import { NavbarLinks } from '@/components/home/head/Links'
import { GetStartedBtn } from '@/components/home/head/GetStartedBtn'
import { ToggleSwitch } from '@/components/home/head/ToggleSwitch'
import { Hamburger } from '@/components/home/head/Hamburger'
import { Menu } from '@/components/home/head/Menu'

export const Navbar: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])
  return (
    <header>
      <nav className="flex justify-between items-center">
        <Menu open={isOpen} toggleHandler={toggleMenu} />
        <CompanyLogo />
        <NavbarLinks />
        <div className="flex items-center">
          <ToggleSwitch />
          <Hamburger open={isOpen} toggleHandler={toggleMenu} />
          <GetStartedBtn />
        </div>
      </nav>
    </header>
  )
}
