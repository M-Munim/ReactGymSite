import React from 'react'
import './home.css'
import MainHeader from '../../components/MainHeader'
import Program from '../../components/Program'
import Values from '../../components/Values'

const Home = () => {
  return (
    <>
      <MainHeader />
      <Program />
      <Values />
    </>
  )
}

export default Home