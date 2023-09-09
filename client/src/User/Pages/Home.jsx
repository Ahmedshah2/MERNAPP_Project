import React from 'react'
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';

export default function Home() {

    const data = [
        {
            imageUrl: 'src/assets/4.jpg',
            text: 'Variety of High-Quality Premium Fabrics',
        },
        {
            imageUrl: 'https://storage.googleapis.com/pai-images/ae234ff4997c4c27b241fa49242cfbc9.jpeg',
            text: 'Explore Our Variety of T-Shirts',
        },
        {
            imageUrl: 'src/assets/img/parallax-2.jpg',
            text: 'Explore Our Variety of Travelling Products',
        },
        {
            imageUrl: 'src/assets/SLGA002.jpg',
            text: 'Premium Watches Variety By E-Hub',
        },
    ];
    return (

        <>
            {data.map((val, key) => (
                <section
                    key={key}
                    style={{
                        backgroundImage: `url(${val.imageUrl})`,
                        backgroundAttachment: 'fixed',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        minHeight: '100vh',
                    }}
                    className="parallax-holder text-center text-white text-center"
                >
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 mx-auto mx-auto">
                                <h1 className="text-shadow">{val.text}</h1>
                                <p className="lead text-shadow mb-4">
                                    One morning, when Gregor Samsa woke from troubled dreams, he found
                                    himself transformed in his bed into a horrible vermin. He lay on his
                                    armour-like back, and if he lifted his head a little he could see
                                    his brown belly, slightly domed and divided by arches into stiff
                                    sections
                                </p>
                                <p>
                                    {" "}
                                    <Link className="btn btn-light" to="/category">
                                        <svg className="svg-icon me-2 svg-icon-heavy svg-icon-sm">
                                            <use xlinkHref="#shopping-bag-1"> </use>
                                        </svg>
                                        See this offer
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            ))}


            {/* Footer*/}
            <Footer />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                crossOrigin="anonymous"
            />
        </>


    )
}
