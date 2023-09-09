import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
import axios from 'axios'

export default function Brands() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get('/api/getallbrands').then(json => setBrands(json.data.brands)).catch(err => alert(err.message))
    }, [])


    return (
        <div className="container-fluid my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">
                    Immerse yourself in a world of renowned brands that define excellence and innovation. Our carefully curated collection of brands represents the pinnacle of craftsmanship, quality, and style. From industry leaders to emerging trendsetters, our brands embody a commitment to delivering exceptional experiences, ensuring that you have access to the finest products that align with your aspirations.
                </small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {brands?.map((val, key) => (
                    <div key={key}>
                        < UserCards image={val.BrandImage} name={val.BrandName} url="/products" />
                    </div>
                ))}
            </div>
        </div >
    )
}