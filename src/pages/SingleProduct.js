import React from 'react'
import AnnouncementBar from '../components/commonComp/AnnouncementBar'
import Navbar from '../components/commonComp/Navbar'
import AddToCart from "../components/Product/AddToCart"
import Natural from '../components/Product/Natural'
import Recyclable from '../components/Product/Recyclable'
import TheStory from '../components/Product/TheStory'
import VersGer from '../components/Product/VersGer'
import DeliveryInfo2 from "../components/ProductCategories/DeliveryInfo2"
import CutomerReviewsCo from "../components/Collection/CutomerReviewsCo"
import Recomended from '../components/Product/Recomended'
import NewsLetter from '../components/home/NewsLetter'
import Footer from '../components/commonComp/Footer'
import  { TabTitle } from "./PageTitle"

const SingleProduct = () => {
  TabTitle('Specific Product | Zwarte Roes')
  
  return (
<>
<Navbar/>
<AnnouncementBar/>
<AddToCart/>
<TheStory/>
<Natural/>
<VersGer/>
<Recyclable/>
<DeliveryInfo2/>
<CutomerReviewsCo/>
<Recomended/>
<NewsLetter/>
<Footer/>
</>
  )
}

export default SingleProduct