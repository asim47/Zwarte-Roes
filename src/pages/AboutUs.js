import React from 'react'
import AboutHeader from '../components/AboutUs/AboutHeader'
import BackToCoffe from '../components/AboutUs/BackToCoffe'
import InstaPlug from '../components/AboutUs/InstaPlug'
import OurCause from '../components/AboutUs/OurCause'
import OurChange from '../components/AboutUs/OurChange'
import OurSpeacialty from '../components/AboutUs/OurSpeacialty'
import QuantitySoFar from '../components/AboutUs/QuantitySoFar'
import RiseOfRoes from '../components/AboutUs/RiseOfRoes'
import RoesRoastary from '../components/AboutUs/RoesRoastary'
import TheBrand from '../components/AboutUs/TheBrand'
import AnnouncementBar from '../components/commonComp/AnnouncementBar'
import Footer from '../components/commonComp/Footer'
import Navbar from '../components/commonComp/Navbar'
import NewsLetter from '../components/home/NewsLetter'
import  { TabTitle } from "./PageTitle"

const AboutUs = () => {
  TabTitle('About Us | Zwarte Roes')

  return (
<>
<Navbar/>
<AnnouncementBar/>
<AboutHeader/>
<QuantitySoFar/>
<OurCause/>
<OurSpeacialty/>
<TheBrand/>
<RoesRoastary/>
<OurChange/>
<RiseOfRoes/>
<InstaPlug/>
<BackToCoffe/>
<NewsLetter/>
<Footer/>
</>
  )
}

export default AboutUs