import React, { FC, ReactElement } from 'react'
import { BlogContainer } from '@/components/blog/BlogContainer'

export const BlogSection: FC = (): ReactElement => {
  return (
    <section>
      <BlogContainer />
    </section>
  )
}
