import Hero from '../components/Hero'
import CategoryCards from '../components/CategoryCards'
import FeaturedBikes from '../components/FeaturedBikes'
import BudgetAndBrand from '../components/BudgetAndBrand'
import TrustBand from '../components/TrustBand'

function Home() {
  return (
    <>
      <Hero />
      <CategoryCards />
      <FeaturedBikes />
      <BudgetAndBrand />
      <TrustBand />
    </>
  )
}

export default Home