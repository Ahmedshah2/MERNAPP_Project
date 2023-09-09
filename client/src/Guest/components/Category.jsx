import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('/api/getallcategories')
            .then(json => setCategory(json.data.categories))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="container-fluid my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Explore Our Products" is an invitation to delve into a wide array of offerings and discover what a company or website has to offer. This phrase is commonly used as a call to action on websites, especially e-commerce platforms or businesses with diverse product lines. It encourages visitors to browse through a catalog, explore various categories, and learn more about the range of products or services available. By clicking on "Explore Our Products," users can expect to embark on a journey of discovery, finding detailed information, images, and options for each product, making informed choices, and potentially making a purchase decision. It's a user-friendly way to engage customers and encourage them to dive deeper into what a company has to offer</small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {
                    category.map((val, key) => <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />)
                }

            </div>
        </div>
    )
}