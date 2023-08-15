import React, { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

interface AccordionItemProps {
  title: string
  content: string
}

export const Accordion: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="rounded-md dark:card_glass__dark bg-slate-50 shadow-sm">
      <div
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleAccordion}
      >
        <div>
          {isExpanded ? (
            <ChevronUpIcon className="w-6 h-6 dark:text-slate-200 text-gray-700" />
          ) : (
            <ChevronDownIcon className="w-6 h-6 dark:text-slate-200 text-gray-700" />
          )}
        </div>
        <h2 className="dark:text-slate-200 text-gray-500 font-semibold tracking-wide text-[13px] lg:text-[1rem]">
          {title}
        </h2>
      </div>
      {isExpanded && (
        <div className="p-4 dark:text-slate-400 text-gray-700 text-right text-[15px]">
          {content}
        </div>
      )}
    </div>
  )
}
