import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => (
    <div className="app">
        <Header />
        <Search />
        <Categories>
            <Carousel title="Mi Lista">
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
        <Categories title="Originales de Platzi Video">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
        <Footer />
    </div>
)

export default App
