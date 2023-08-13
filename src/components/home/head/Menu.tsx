import React, { FC, ReactElement } from 'react'
import {
  XMarkIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  MegaphoneIcon,
  ChatBubbleBottomCenterIcon,
  NewspaperIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid'
import { MenuItem } from '@/components/home/head/MenuItem'

interface IMenu {
  open: boolean
  toggleHandler: () => void
}
export const Menu: FC<IMenu> = ({ open, toggleHandler }): ReactElement => {
  return (
    <aside className="absolute flex flex-col items-center justify-center min-h-screen lg:hidden">
      <>
        {open && (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-4 top-4 z-50 p-1 hover:dark:bg-gray-900 hover:bg-gray-200 rounded-md duration-200 ease-out"
            onClick={toggleHandler}
          >
            <XMarkIcon className="w-9 h-9 dark:text-slate-200 text-gray-800" />
          </button>
        )}

        <nav
          className={`top-0 right-0 w-[60vw] lg:w-[35vw] dark:bg-[#020617] bg-white   px-2 py-20 space-y-4 dark:text-white fixed h-full z-40 ease-in-out duration-300 shadow-md ${
            open ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          <MenuItem
            content="صفحه اصلی"
            icon={
              <HomeIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#home"
          />
          <MenuItem
            content="چرا ما"
            icon={
              <QuestionMarkCircleIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#whyus"
          />
          <MenuItem
            content="نظرات"
            icon={
              <MegaphoneIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#reviews"
          />
          <MenuItem
            content="پرسش و پاسخ"
            icon={
              <ChatBubbleBottomCenterIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#q&a"
          />
          <MenuItem
            content="بلاگ"
            icon={
              <NewspaperIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#blog"
          />
          <MenuItem
            content="تماس با ما"
            icon={
              <PhoneIcon className="w-6 h-6 dark:text-slate-100 text-gray-600 group-hover:text-slate-100" />
            }
            linkSrc="#contact"
          />
        </nav>
      </>
    </aside>
  )
}
