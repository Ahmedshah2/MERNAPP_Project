// import React, { useEffect, useState } from 'react'


// export default function Products() {

//     return (
//         <>
//             <main className="py-5">
//                 <div className="container py-5">
//                     <div className="row">
//                         {/* Grid */}
//                         <div className="col-12">
//                             {/* Filters*/}
//                             <header className="d-flex justify-content-between align-items-start mb-5">
//                                 <span className="visible-items">
//                                     Showing <strong>1-15 </strong>of <strong>158 </strong>results
//                                 </span>
//                                 <select className="form-control js-sort" name="sort">
//                                     <option value="">Sort by</option>
//                                     <option value="Option1">Price: low to high</option>
//                                     <option value="Option2">Price: high to low</option>
//                                     <option value="Option3">Best match</option>
//                                     <option value="Option4">Top rated</option>
//                                     <option value="Option5">Popularity</option>
//                                 </select>
//                             </header>
//                             <div className="row gy-5 mb-5">
//                                 {/* item*/}



//                                 <div className="item col-xl-3 col-lg-4 col-md-6">
//                                     <div className="product">
//                                         <div className="image d-flex align-items-center justify-content-center bg-light">
//                                             <img
//                                                 className="img-fluid"
//                                                 src="src/assets/img/hoodie-woman-4.jpg"
//                                                 alt="product"
//                                             />
//                                             <div className="hover-overlay d-flex align-items-center justify-content-center">
//                                                 <div className="CTA d-flex align-items-center justify-content-center">
//                                                     <a href="#">
//                                                         <i className="fas fa-shopping-cart" />
//                                                     </a>
//                                                     <a className="active" href="detail.html">
//                                                         <i className="fas fa-search" /> View
//                                                     </a>
//                                                     <a
//                                                         href="#"
//                                                         data-bs-toggle="modal"
//                                                         data-bs-target="#productView"
//                                                     >
//                                                         <i className="fas fa-expand" />
//                                                     </a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="pt-3">
//                                             <small className="text-muted">Women Wear</small>
//                                             <a className="reset-anchor" href="detail.html">
//                                                 <h3 className="h6 mb-0 text-uppercase">Elegant Lake</h3>
//                                             </a>
//                                             <span className="text-muted">$40.00</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* Pagination*/}
//                             <nav aria-label="Page navigation example">
//                                 <ul className="pagination justify-content-center">
//                                     <li className="page-item disabled">
//                                         <a
//                                             className="page-link"
//                                             href="#"
//                                             tabIndex={-1}
//                                             aria-disabled="true"
//                                         >
//                                             Prev
//                                         </a>
//                                     </li>
//                                     <li className="page-item active">
//                                         <a className="page-link" href="#">
//                                             1
//                                         </a>
//                                     </li>
//                                     <li className="page-item">
//                                         <a className="page-link" href="#">
//                                             2
//                                         </a>
//                                     </li>
//                                     <li className="page-item">
//                                         <a className="page-link" href="#">
//                                             3
//                                         </a>
//                                     </li>
//                                     <li className="page-item">
//                                         <a className="page-link" href="#">
//                                             4
//                                         </a>
//                                     </li>
//                                     <li className="page-item">
//                                         <a className="page-link" href="#">
//                                             5
//                                         </a>
//                                     </li>
//                                     <li className="page-item">
//                                         <a className="page-link" href="#">
//                                             Next
//                                         </a>
//                                     </li>
//                                 </ul>
//                             </nav>
//                         </div>
//                         {/* / Grid End*/}
//                     </div>
//                 </div>
//             </main>
//             {/*  Modal */}
//             <div
//                 className="modal fade"
//                 id="productView"
//                 data-bs-keyboard="false"
//                 tabIndex={-1}
//                 aria-hidden="true"
//             >
//                 <div className="modal-dialog modal-xl modal-dialog-centered">
//                     <div className="modal-content rounded-0 border-0">
//                         <div className="modal-body p-5 shadow position-relative">
//                             <div className="ribbon ribbon-primary text-uppercase mt-4">Sale</div>
//                             <div className="row align-items-center gx-5">
//                                 <div className="col-lg-6">
//                                     <img className="img-fluid d-block" src="src/assets/img/shirt.jpg" alt="" />
//                                 </div>
//                                 <div className="col-lg-6">
//                                     <button
//                                         className="close modal-close p-4 border-0"
//                                         type="button"
//                                         data-bs-dismiss="modal"
//                                         aria-label="Close"
//                                     >
//                                         <span aria-hidden="true">
//                                             <svg className="svg-icon text-white mt-1">
//                                                 <use xlinkHref="#close-1"> </use>
//                                             </svg>
//                                         </span>
//                                     </button>
//                                     <div className="my-lg-5 my-md-4">
//                                         <h2>Lose Oversized Shirt</h2>
//                                         <ul className="list-inline mb-4">
//                                             <li className="list-inline-item">
//                                                 <p className="h5 text-primary mb-0">$65.00</p>
//                                             </li>
//                                             <li className="list-inline-item">
//                                                 <p className="h5 fw-normal text-muted text-decoration-line-through mb-0">
//                                                     $90.00
//                                                 </p>
//                                             </li>
//                                         </ul>
//                                         <p className="text-muted">
//                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//                                             do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//                                             Ut enim ad minim veniam, quis nostrud exercitation ullamco
//                                         </p>
//                                         <ul className="list-inline d-flex align-items-center my-4">
//                                             <li className="list-inline-item">
//                                                 <div className="d-flex align-items-center">
//                                                     <div className="quantity d-flex align-items-center me-4">
//                                                         <div className="dec-btn" onclick="decrease(this)">
//                                                             -
//                                                         </div>
//                                                         <input
//                                                             className="quantity-no"
//                                                             type="text"
//                                                             defaultValue={1}
//                                                         />
//                                                         <div className="inc-btn" onclick="increase(this)">
//                                                             +
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                             <li className="list-inline-item">
//                                                 <select
//                                                     className="form-control js-modalsize"
//                                                     name="modalsize"
//                                                 >
//                                                     <option value="small">Small</option>
//                                                     <option value="medium">Medium</option>
//                                                     <option value="large">Large</option>
//                                                     <option value="x-large">X-Large</option>
//                                                 </select>
//                                             </li>
//                                         </ul>
//                                         <ul className="list-inline">
//                                             <li className="list-inline-item">
//                                                 <a className="btn btn-primary px-5" href="#">
//                                                     {" "}
//                                                     <i className="fas fa-shopping-cart me-2" />
//                                                     Add to cart
//                                                 </a>
//                                             </li>
//                                             <li className="list-inline-item">
//                                                 <a className="btn btn-outline-secondary px-5" href="#">
//                                                     {" "}
//                                                     <i className="far fa-heart me-2" />
//                                                     Add to wishlist
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* JavaScript files*/}
//             {/* FontAwesome CSS - loading as last, so it doesn't block rendering*/}
//             <link
//                 rel="stylesheet"
//                 href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
//                 integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
//                 crossOrigin="anonymous"
//             />
//         </>
//     )
// }


// ------------ PRODUCT BOOTSTRAP OLD CARD CODE ---------------

import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'
import Footer from '../Components/Footer';


export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('/api/getallproducts')
            .then(json => setProducts(json.data.products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container-fluid my-5">
            <div className="text-center">
                <h2>Products</h2>
                <small className="text-secondary">Discover an extensive array of products that span across our brand categories, designed to meet your every requirement. Whether you're seeking cutting-edge technology, timeless fashion, innovative gadgets, or stylish home decor, our curated selection ensures that you find the perfect products to enhance your lifestyle and fulfill your desires.</small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {
                    products?.map((val, key) => <div key={key}>
                        <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} description={val.description} /></div>
                    )
                }

            </div>
        </div>
    )
}
