'use client'
import { ReactElement } from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
export const ToggleMode = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      className="w-fit absolute right-5 top-2 p-2 rounded-md hover:scale-110 active:scale-100 duration-200 bg-slate-200 dark:bg-[#212933]"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  )
}
