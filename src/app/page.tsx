import React from 'react'
import Upperheader, { Header } from './components/header'

import Footer from './components/footer'
import HeroSection from './components/heroSection'
import ProductSection from './components/productSection'
import BrowseByStyleSection from './components/style'
import CustomerReviewSection from './components/customerReviewSection'
import UpdateSection from './components/updateSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <BrowseByStyleSection />
      <CustomerReviewSection />
    </div>
  )
}

export default Home
