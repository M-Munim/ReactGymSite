import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Program from '../../components/Program'
import Values from '../../components/Values'
import FAQs from '../../components/FAQs'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Program />
      <Values />
      <FAQs />
      <Testimonials />
    </>
  )
}

export default Home