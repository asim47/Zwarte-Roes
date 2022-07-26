import React from 'react'
import Tags from '../components/Collection/Tags'
import AnnouncementBar from '../components/commonComp/AnnouncementBar'
import Navbar from '../components/commonComp/Navbar'
import AllCo from '../components/Collection/AllCo'
import ChooseUs from '../components/Collection/ChooseUs'
import OurKit from '../components/Collection/OurKit'
import CustomerReviewCo from '../components/Collection/CutomerReviewsCo'
import CoffeGear from '../components/home/CoffeGear'
import NewsLetter from '../components/home/NewsLetter'
import Footer from '../components/commonComp/Footer'

const All = () => {
  return (
<>

<Navbar/>
<AnnouncementBar/>
<Tags/>
<AllCo/>
<ChooseUs/>
<OurKit/>
<CustomerReviewCo/>
<CoffeGear/>
<NewsLetter/>
<Footer/>
</>
  )
}

export default All