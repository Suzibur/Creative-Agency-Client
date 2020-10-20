import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Col, Container } from 'react-bootstrap';
import Carousel1 from '../../../images/carousel-1.png'
import Carousel2 from '../../../images/carousel-2.png'
import Carousel3 from '../../../images/carousel-3.png'
import Carousel4 from '../../../images/carousel-4.png'
import Carousel5 from '../../../images/carousel-5.png'
import './Slider.css'

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Col className="slider">
                <p className="work-title">Here Are some of our <span>works</span></p>
            <Container className="mt-5">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={{ margin: '0 25%' }}
                            className="w-50"
                            src={Carousel1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ margin: '0 25%' }}
                            className="w-50"
                            src={Carousel2}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ margin: '0 25%' }}
                            className="w-50"
                            src={Carousel3}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ margin: '0 25%' }}
                            className="w-50"
                            src={Carousel4}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ margin: '0 25%' }}
                            className="w-50"
                            src={Carousel5}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Col>
    );
};

export default Slider;