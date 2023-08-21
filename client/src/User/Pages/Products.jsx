import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'

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
