import React from 'react'
import HomeBreadCrump from '../components/Home/HomeBreadCrump'
import HomeService from '../components/Home/HomeService'
import HomeClient from '../components/Home/HomeClient'
import HomeBrand from '../components/Home/HomeBrand'
import HomeNews from '../components/Home/HomeNews'

const Home = () => {
  return (
    <>
      <HomeBreadCrump />
      <HomeService/>
      <HomeBrand/>
      <HomeClient/>
      <HomeNews/>
    </>
  )
}

export default Home