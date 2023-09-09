import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import "bootstrap/dist/css/bootstrap.min.css";
import './card.css'


export default function UserCards({ name, image, url, description }) {
    return (
        // <>
        //     <div className="item col-xl-3 col-lg-4 col-md-6">
        //         <Link to={url}>
        //             <div className="product">
        //                 <div className="image d-flex align-items-center justify-content-center bg-light">
        //                     <div className="ribbon ribbon-primary text-uppercase">
        //                         Sale
        //                     </div>

        //                     <img
        //                         style={{ height: '250px', padding: '10px' }}
        //                         variant="top"
        //                         className="img-fluid"
        //                         src={image}
        //                         alt="product"
        //                     />
        //                     <div className="hover-overlay d-flex align-items-center justify-content-center">
        //                         <div className="CTA d-flex align-items-center justify-content-center">
        //                             <a href="#">
        //                                 <i className="fas fa-shopping-cart" />
        //                             </a>
        //                             <a className="active" href="detail.html">
        //                                 <i className="fas fa-search" /> View
        //                             </a>
        //                             <a
        //                                 href="#"
        //                                 data-bs-toggle="modal"
        //                                 data-bs-target="#productView"
        //                             >
        //                                 <i className="fas fa-expand" />
        //                             </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="pt-3">
        //                     <small className="text-muted">{description}</small>
        //                     <a className="reset-anchor" href="detail.html">
        //                         <h3 className="h6 mb-0 text-uppercase">{name}</h3>
        //                     </a>
        //                     <span className="text-muted">$40.00</span>
        //                 </div>
        //             </div>
        //         </Link>
        //     </div>
        //     <div
        //         className="modal fade"
        //         id="productView"
        //         data-bs-keyboard="false"
        //         tabIndex={-1}
        //         aria-hidden="true"
        //     >
        //         <div className="modal-dialog modal-xl modal-dialog-centered">
        //             <div className="modal-content rounded-0 border-0">
        //                 <div className="modal-body p-5 shadow position-relative">
        //                     <div className="ribbon ribbon-primary text-uppercase mt-4">Sale</div>
        //                     <div className="row align-items-center gx-5">
        //                         <div className="col-lg-6">
        //                             <img className="img-fluid d-block" src="img/shirt.jpg" alt="" />
        //                         </div>
        //                         <div className="col-lg-6">
        //                             <button
        //                                 className="close modal-close p-4 border-0"
        //                                 type="button"
        //                                 data-bs-dismiss="modal"
        //                                 aria-label="Close"
        //                             >
        //                                 <span aria-hidden="true">
        //                                     <svg className="svg-icon text-white mt-1">
        //                                         <use xlinkHref="#close-1"> </use>
        //                                     </svg>
        //                                 </span>
        //                             </button>
        //                             <div className="my-lg-5 my-md-4">
        //                                 <h2>Lose Oversized Shirt</h2>
        //                                 <ul className="list-inline mb-4">
        //                                     <li className="list-inline-item">
        //                                         <p className="h5 text-primary mb-0">$65.00</p>
        //                                     </li>
        //                                     <li className="list-inline-item">
        //                                         <p className="h5 fw-normal text-muted text-decoration-line-through mb-0">
        //                                             $90.00
        //                                         </p>
        //                                     </li>
        //                                 </ul>
        //                                 <p className="text-muted">
        //                                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        //                                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        //                                     enim ad minim veniam, quis nostrud exercitation ullamco
        //                                 </p>
        //                                 <ul className="list-inline d-flex align-items-center my-4">
        //                                     <li className="list-inline-item">
        //                                         <div className="d-flex align-items-center">
        //                                             <div className="quantity d-flex align-items-center me-4">
        //                                                 <div className="dec-btn" onclick="decrease(this)">
        //                                                     -
        //                                                 </div>
        //                                                 <input
        //                                                     className="quantity-no"
        //                                                     type="text"
        //                                                     defaultValue={1}
        //                                                 />
        //                                                 <div className="inc-btn" onclick="increase(this)">
        //                                                     +
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     </li>
        //                                     <li className="list-inline-item">
        //                                         <select
        //                                             className="form-control js-modalsize"
        //                                             name="modalsize"
        //                                         >
        //                                             <option value="small">Small</option>
        //                                             <option value="medium">Medium</option>
        //                                             <option value="large">Large</option>
        //                                             <option value="x-large">X-Large</option>
        //                                         </select>
        //                                     </li>
        //                                 </ul>
        //                                 <ul className="list-inline">
        //                                     <li className="list-inline-item">
        //                                         <a className="btn btn-primary px-5" href="#">
        //                                             {" "}
        //                                             <i className="fas fa-shopping-cart me-2" />
        //                                             Add to cart
        //                                         </a>
        //                                     </li>
        //                                     <li className="list-inline-item">
        //                                         <a className="btn btn-outline-secondary px-5" href="#">
        //                                             {" "}
        //                                             <i className="far fa-heart me-2" />
        //                                             Add to wishlist
        //                                         </a>
        //                                     </li>
        //                                 </ul>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>

        // </>
        <Row className="m-1 user-card mt-3">
            <Col className='m-1'>
                <Link to={url} className='text-decoration-none'>
                    <Card style={{ width: '320px' }}>
                        <Card.Img style={{ height: '250px', padding: '10px' }} variant="top" src={image} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </Row>
    )
}