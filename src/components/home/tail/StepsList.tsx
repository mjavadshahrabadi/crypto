import React, { FC, ReactElement } from 'react'
import { StepsItem } from '@/components/home/tail/StepsItem'
import { UserIcon, HomeIcon, WalletIcon } from '@heroicons/react/24/solid'
import { StepDivider } from '@/components/home/tail/StepDivider'

export const StepsList: FC = (): ReactElement => {
  return (
    <ul className="w-full flex flex-col items-center lg:flex-row lg:items-start mt-20 dark:border dark:border-slate-600 rounded-md p-6 border shadow-sm">
      <StepsItem
        icon={
          <UserIcon className="w-9 h-9 dark:text-pink-500 text-indigo-500" />
        }
        title="ایجاد حساب کاربری"
        description="حساب های سنتی و رمزنگاری خود را به صورت ایمن نصب کنید + حساب های نگهبانی اضافی ایجاد کنید"
      />
      <StepDivider />
      <StepsItem
        icon={
          <HomeIcon className="w-9 h-9 dark:text-pink-500 text-amber-500" />
        }
        title="بانک خود را پیوند دهید"
        description="کارت های نامحدود با محدودیت های سفارشی صادر کنید و هزینه های تیم خود را در نرم افزار حسابداری پیگیری کنید"
      />
      <StepDivider />
      <StepsItem
        icon={
          <WalletIcon className="w-9 h-9 dark:text-pink-500 text-red-500" />
        }
        title="خرید و فروش را شروع کنید"
        description="دارایی های خود را سریع و مطمئن بخرید و بفروشید. از هر ارزی برای پرداخت کارت های خود استفاده کنید"
      />
    </ul>
  )
}
