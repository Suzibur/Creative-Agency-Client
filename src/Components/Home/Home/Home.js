import React from 'react';
import Clients from '../Clients/Clients';
import Feedbacks from '../Feedbacks/Feedbacks';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Clients></Clients>
            <Services></Services>
            <Slider></Slider>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </>
    );
};

export default Home;