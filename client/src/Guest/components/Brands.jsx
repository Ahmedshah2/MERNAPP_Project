import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Brand() {
    const [brands, setbrands] = useState([])

    useEffect(() => {
        axios.get('/api/getallbrands')
            .then(json => setbrands(json.data.brands))
            .catch(err => alert(err.message))
    }, [])




    return (
        <div className="container-fluid my-5">
            <div className="text-center">
                <h2>Brands</h2>
                <small className="text-secondary">Explore Our Brands" is an invitation for customers or website visitors to delve into the collection of brands associated with a company or platform. This phrase is often used by businesses or organizations that offer a variety of products or services from different brands. It encourages users to discover the range of brands available, each with its unique offerings, characteristics, and value propositions.

                    By clicking on "Explore Our Brands," users can expect to find information about the various brands carried by the company. This may include details about the brand's history, philosophy, product lines, and any special features or benefits associated with each brand. It provides users with an opportunity to explore their options, compare different brands, and make more informed decisions based on their preferences and needs.

                    In essence, "Explore Our Brands" serves as an entry point for users to learn more about the diverse range of offerings available through the company's partnerships or product portfolio.</small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {
                    brands.map((val, key) => <GuestCards className="user-card" key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}