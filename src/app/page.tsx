import { HomeSection } from '@/components/home'
import { WhyUsSection } from '@/components/whyus'
import { ReviewsSection } from '@/components/reviews'
import { QuestionAndAnswerSection } from '@/components/f&q'

export default function Home() {
  return (
    <>
      <HomeSection />
      <WhyUsSection />
      <ReviewsSection />
      <QuestionAndAnswerSection />
    </>
  )
}
