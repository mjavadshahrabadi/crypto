import React, { FC, ReactElement } from 'react'
import Link from 'next/link'

export const NavbarLinks: FC = (): ReactElement => {
  return (
    <ul className="hidden lg:flex items-center justify-between space-x-4">
      <li className="navbar_link">
        <Link href="#contact">تماس با ما</Link>
      </li>
      <li className="navbar_link">
        <Link href="#blog">بلاگ</Link>
      </li>
      <li className="navbar_link">
        <Link href="#q&a">پرسش و پاسخ</Link>
      </li>
      <li className="navbar_link">
        <Link href="#reviews">نظرات</Link>
      </li>
      <li className="navbar_link">
        <Link href="#whyus">چرا ما</Link>
      </li>
      <li className="navbar_link">
        <Link href="#home">صفحه اصلی</Link>
      </li>
    </ul>
  )
}
