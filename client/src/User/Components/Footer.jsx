import React from 'react'

export default function Footer() {
    return (
        <footer className="footer" style={{ background: "#111111" }}>
            <div className="py-5 text-white" style={{ background: "#171717" }}>
                <div className="container py-3">
                    <div className="row gy-4">
                        <div className="col-lg-4 border-lg-end border-dark">
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                <svg className="svg-icon svg-icon-md mb-0">
                                    <use xlinkHref="#delivery-time-1"> </use>
                                </svg>
                                <div className="ms-3">
                                    <h6 className="text-uppercase mb-0">
                                        Free shipping &amp; return
                                    </h6>
                                    <p className="text-muted text-sm mb-0">
                                        Free Shipping over $300
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 border-lg-end border-dark">
                            <div className="d-flex align-items-center justify-content-center">
                                <svg className="svg-icon svg-icon-md mb-0">
                                    <use xlinkHref="#dollar-sign-1"> </use>
                                </svg>
                                <div className="ms-3">
                                    <h6 className="text-uppercase mb-0">Money back guarantee</h6>
                                    <p className="text-muted text-sm mb-0">
                                        30 Days Money Back Guarantee
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-center">
                                <svg className="svg-icon svg-icon-md mb-0">
                                    <use xlinkHref="#helpline-24h-1"> </use>
                                </svg>
                                <div className="ms-3">
                                    <h6 className="text-uppercase mb-0">+92 333 3334806</h6>
                                    <p className="text-muted text-sm mb-0">
                                        24/7 Available Support
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyrights py-1" style={{ background: "#0e0e0e" }}>
                <div className="container py-1">
                    <div className="row align-items-center gy-3">
                        <div className="col-md-6">
                            <p className="mb-0 text-sm fw-normal">
                                © 2023{" "}

                                E-Commerce
                                All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-inline text-lg-end mb-0">
                                <li className="list-inline-item">
                                    <img src="https://icon-library.com/images/visa-master-icon/visa-master-icon-0.jpg" alt="..." width={40} />
                                </li>
                                <li className="list-inline-item">
                                    <img src="https://www.iconarchive.com/download/i76280/designbolts/credit-card-payment/Visa.256.png" alt="..." width={40} />
                                </li>
                                <li className="list-inline-item">
                                    <img src="https://icons.veryicon.com/png/Business/Credit%20Card%20Payment/Paypal.png" alt="..." width={40} />
                                </li>
                                <li className="list-inline-item">
                                    <img src="https://iconsplace.com/wp-content/uploads/_icons/ffa500/256/png/mastercard-icon-11-256.png" alt="..." width={40} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
