import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Home() {

    const images = [
        "https://www.mageants.com/media/mageants_blog/abc.jpg",
        "https://img.freepik.com/premium-vector/web-banner-illustration-buy-online-e-commerce-online-shopping_1124-625.jpg?w=2000",
        "https://www.shutterstock.com/shutterstock/photos/2145523383/display_1500/stock-vector-template-for-online-store-online-shopping-banner-ecommerce-marketing-homepage-layout-realistic-2145523383.jpg"
    ]

    return (
        <div>
            <Carousel prevIcon={
                <span
                    style={{
                        backgroundColor: '#ff0000',
                        color: '#fff',
                        borderRadius: '50%',
                        padding: '10px',
                    }}
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                />
            }
                nextIcon={
                    <span
                        style={{
                            backgroundColor: '#ff0000',
                            color: '#fff',
                            borderRadius: '50%',
                            padding: '10px',
                        }}
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                }>
                {images.map((val, key) =>
                    <Carousel.Item>
                        <Link to={`/products`}>
                            <img key={key} style={{ height: '80vh', width: '100%' }}
                                src={val}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h1 style={{ color: 'red' }}>Browse Our Products for Exclusive discount offers Upto 70% OFF.</h1>
                            </Carousel.Caption>
                        </Link>
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}
