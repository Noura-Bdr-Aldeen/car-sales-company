import Hero from '../components/Hero'
import WhyTrueCar from '../components/WhyTrueCar'
import BrandSection from '../components/BrandSection'
import CarReviews from '../components/car-reviews/CarReviews'
import Opinions from '../components/opinions/Opinions'
import MostWantedCar from '../components/card-wanted-car/MostWantedCar'

const Home = () => {
  return (
    <div>
      <Hero />
      <MostWantedCar />
      <WhyTrueCar />
      <CarReviews />
      <Opinions />
      <BrandSection />
    </div>
  )
}

export default Home
