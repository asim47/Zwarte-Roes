import React, { lazy, Suspense } from 'react'
import { Route, Navigate, Routes } from "react-router-dom";
// import PropTypes from 'prop-types'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = lazy(() => import("./pages/Home"))
const Product = lazy(() => import("./pages/Product"))
const Collection = lazy(() => import("./pages/Collection"))
const All = lazy(() => import("./pages/All"))
const SingleProduct = lazy(() => import("./pages/SingleProduct"))
const AboutUs = lazy(() => import("./pages/AboutUs"))


const App = (props) => {


    return (
        <Suspense fallback={<>loading...</>}>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="product" element={<Product/>} />
                <Route path="collection" element={<Collection/>} />
                <Route path="all" element={<All/>} />
                <Route path="SingleProduct" element={<SingleProduct/>} />
                <Route path="aboutus" element={<AboutUs/>} />
            </Routes>
        </Suspense>
    )
}

// App.propTypes = {

// }


export default App
