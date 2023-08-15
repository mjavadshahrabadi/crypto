'use client'
import React, { FC, ReactElement } from 'react'
import { Accordion } from '@/components/ui/Accordion'

export const QuestionAndAnswerList: FC = (): ReactElement => {
  return (
    <ul className="flex flex-col space-y-6 ">
      <Accordion
        title="رمز ارز چیست؟"
        content="آنها نه تنها آنچه را که من می گویم می فهمند، بلکه بین خطوط می خوانند و همچنین ایده های خودم را به من می دهند. فناوری هوش مصنوعی برای بهترین راه حل های تجاری مناسب است"
      />
      <Accordion
        title="معیارهای مختلف را در فرآیند خود چگونه ارزیابی می کنید؟"
        content="آنها نه تنها آنچه را که من می گویم می فهمند، بلکه بین خطوط می خوانند و همچنین ایده های خودم را به من می دهند. فناوری هوش مصنوعی برای بهترین راه حل های تجاری مناسب است"
      />
      <Accordion
        title="چگونه می توان پول در اینجا سرمایه گذاری کرد؟"
        content="آنها نه تنها آنچه را که من می گویم می فهمند، بلکه بین خطوط می خوانند و همچنین ایده های خودم را به من می دهند. فناوری هوش مصنوعی برای بهترین راه حل های تجاری مناسب است"
      />
      <Accordion
        title="چگونه می توانم رمزارز خود را به ارزهای مختلف مبادله کنم؟"
        content="آنها نه تنها آنچه را که من می گویم می فهمند، بلکه بین خطوط می خوانند و همچنین ایده های خودم را به من می دهند. فناوری هوش مصنوعی برای بهترین راه حل های تجاری مناسب است"
      />
      <Accordion
        title="چگونه می توانم کارت های اعتباری را به صورت آنلاین بپذیرم؟"
        content="آنها نه تنها آنچه را که من می گویم می فهمند، بلکه بین خطوط می خوانند و همچنین ایده های خودم را به من می دهند. فناوری هوش مصنوعی برای بهترین راه حل های تجاری مناسب است"
      />
    </ul>
  )
}
