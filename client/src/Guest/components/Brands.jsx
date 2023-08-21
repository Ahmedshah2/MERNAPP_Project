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
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="d-flex flex-wrap justify-content-center m-4">
                {
                    brands.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}