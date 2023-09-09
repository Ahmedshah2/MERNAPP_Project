import React, { useEffect, useState } from 'react'
import UserCards from '../Components/UserCards'
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
                <h2>Categories</h2>
                <small className="text-secondary">Explore our diverse range of brand categories, each offering a unique selection of high-quality products that cater to your varied preferences and needs. From fashion to electronics, home essentials to luxury items, our brand categories encompass a world of choices to elevate your shopping experience.</small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {
                    category.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} url="/products" />)
                }
            </div>
        </div>
    )
}