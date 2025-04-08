import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import ReviewsSection from '../components/home/ReviewsSection'
import FacultySection from '../components/home/FacultySection'
import IntroSection from '../components/home/IntroSection'
import SocialBar from '../components/SocialBar'
import ChatBot from '../components/ChatBot'

const Index = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar></NavBar>
      <main className='flex-grow'>
        <HeroSection></HeroSection>
        <IntroSection></IntroSection>
        <FeaturesSection></FeaturesSection>
        <FacultySection></FacultySection>
        <ReviewsSection></ReviewsSection>
      </main>
      <SocialBar></SocialBar>
      <ChatBot></ChatBot>
      <Footer></Footer>
    </div>
  )
}

export default Index
