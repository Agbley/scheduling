import React from 'react'
import Header from '../components/Header'
import ExpertMenu from '../components/ExpertMenu'
import TopDevelopers from '../components/TopDevelopers'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <ExpertMenu/>
      <TopDevelopers/>
      <Banner/>
    </div>
  )
}

export default Home