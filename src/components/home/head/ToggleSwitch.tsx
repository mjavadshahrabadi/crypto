'use client'
import { ReactElement, FC } from 'react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import DarkModeToggle from 'react-dark-mode-toggle'

import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export const ToggleSwitch: FC = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DarkModeToggle
      className="mr-2"
      checked={theme === 'light' ? false : true}
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size={60}
    />
  )
}
