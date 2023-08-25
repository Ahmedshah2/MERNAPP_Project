import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../firebase/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import UserCards from '../../User/Components/UserCards';


function Brands() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [BrandName, setBrandName] = useState("")
    const [BrandImage, setBrandImage] = useState(null)
    const [brands, setBrands] = useState([])

    const AddBrand = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `images/category/${BrandImage.name}`);
        uploadBytes(storageRef, BrandImage)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        const payload = { BrandName, BrandImage: url };
                        axios.post('/api/createbrand', payload)
                            .then((json) => {
                                setBrands(json.data.brands)

                                setShow(false);
                            })
                            .catch(err => console.log(err.message));
                    })
                    .catch((error) => console.log(error.message));
            })
            .catch((error) => console.log(error.message));
    }


    useEffect(() => {
        axios.get('/api/getallbrands').then(json => setBrands(json.data.brands)).catch(err => alert(err.message))
    }, [])


    const deletebrand = (_id) => {
        console.log(_id)
        const payload = { _id }


        let config = {
            method: 'delete',
            url: '/api/deletebrand',
            data: payload
        };


        axios(config).then(json => setBrands(json.data.brands)).catch(err => alert(err))
    }


    return (
        <>
            <Button className='mt-2' variant="dark" onClick={handleShow}>
                Add Brand
            </Button>


            <div className="container-fluid my-5">

                <h2 className="text-center">Brands</h2>


                <div className="d-flex flex-wrap justify-content-center m-3">
                    {
                        brands.map((val, key) => <div><UserCards key={key} image={val.BrandImage} name={val.BrandName} />
                            <Button className='ms-4 mt-3' variant="danger" onClick={deletebrand.bind(null, val._id)}>Delete Brand</Button>
                        </div>)
                    }

                </div>
            </div>



            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={AddBrand}>
                        <div className="mb-3">
                            <label htmlFor="CategoryName" className="form-label">
                                Category Name
                            </label>
                            <input
                                onChange={(e) => setBrandName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="BrandName"
                                aria-describedby="emailHelp"
                            />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Brand Image
                            </label>
                            <input className="form-control" onChange={(e) => setBrandImage(e.target.files[0])} type="file" id="formFile" />
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>


                </Modal.Body>

            </Modal>
        </>
    );
}

export default Brands;