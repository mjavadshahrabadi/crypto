import { HomeSection } from '@/components/home'
import { WhyUsSection } from '@/components/whyus'
import { ReviewsSection } from '@/components/reviews'
import { QuestionAndAnswerSection } from '@/components/f&q'
import { BlogSection } from '@/components/blog'
import { ContactSection } from '@/components/contact'

export default function Home() {
  return (
    <>
      <HomeSection />
      <WhyUsSection />
      <ReviewsSection />
      <QuestionAndAnswerSection />
      <BlogSection />
      <ContactSection />
    </>
  )
}
