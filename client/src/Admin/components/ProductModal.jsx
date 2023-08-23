import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../firebase/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function ProductModal() {
    const [show, setShow] = useState(false);
    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [ProductName, setProductName] = useState("")
    const [ProductPrice, setProductPrice] = useState("")

    const [ProductThumbnail, setProductThumbnail] = useState(null)
    const [ProductImages, setProductImages] = useState(null)
    const [desc, setDesc] = useState("")
    const [brandVal, setBrandVal] = useState('')
    const [CategoryVal, setCategoryVal] = useState('')
    const [isProcessing, setIsProcessing] = useState(false);



    const [images, setImages] = useState([])


    const handleImageUpload = (event) => {
        const selectedImages = Array.from(event.target.files);
        setProductImages(selectedImages);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => {
        axios.get('/api/getallbrands')
            .then((json) => {
                setBrands(json.data.brands)
                axios.get('/api/getallcategories').then((json) => {
                    setCategories(json.data.categories)
                    setShow(true)
                }).catch(err => alert(err.message))
            })
            .catch(err => alert(err.message))


        setShow(true)
    };


    const urls = [];

    const uploadPromises = () => ProductImages?.map(async (val) => {
        const ImgStorageRef = ref(storage, `images/products/${ProductName}/${val.name}`);
        try {
            const snapshot = await uploadBytes(ImgStorageRef, val);
            const url = await getDownloadURL(snapshot.ref);
            urls.push(url);
            console.log("Firebase URL:", url);
        } catch (error) {
            console.log(error);
        }
    });



    const AddProduct = async (e) => {
        e.preventDefault();
        const uploadAll = uploadPromises()
        setIsProcessing(true);

        Promise.all(uploadAll)
            .then(() => {
                const storageRef = ref(storage, `images/products/${ProductName}/${ProductThumbnail.name}`);

                uploadBytes(storageRef, ProductThumbnail).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((thumbnailurl) => {
                        const payload = {
                            productname: ProductName,
                            thumbnail: thumbnailurl,
                            description: desc,
                            price: ProductPrice,
                            category: CategoryVal,
                            brand: brandVal,
                            images: urls
                        }


                        axios.post('/api/createproduct', payload).then((json) => {
                            setShow(false);
                        }).finally(() => {
                            // window.location.reload()
                            setIsProcessing(false);
                        })




                    })
                        .catch((error) => {
                            alert(error.message)
                            setIsProcessing(false);
                        });
                });








            })
            .catch(err => {
                alert(err.message)
                setIsProcessing(false);
            });

    }

    return (
        <>
            <Button variant="dark" onClick={handleShow}>
                Add Product
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form>
                        <div className="mb-3">
                            <label htmlFor="ProductName" className="form-label">
                                Product Name
                            </label>
                            <input
                                required
                                value={ProductName}
                                onChange={(e) => setProductName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="ProductName"
                                aria-describedby="emailHelp"
                            />

                        </div>


                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                $
                            </span>
                            <input
                                required
                                type="text"
                                className="form-control"
                                placeholder="Price"
                                aria-label="Price"
                                aria-describedby="basic-addon1"
                                value={ProductPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                            />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Product Thumbnail
                            </label>
                            <input required className="form-control" onChange={(e) => setProductThumbnail(e.target.files[0])} type="file" id="formFile" />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">
                                Product Images
                            </label>
                            <input required className="form-control" onChange={handleImageUpload} type="file" multiple id="formFile" />
                        </div>


                        <div className="image-list d-flex gap-5 my-5">
                            {ProductImages?.map((image, index) => (
                                <img
                                    required
                                    style={{ height: '10vh', objectFit: 'contain' }}
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt={`Image ${index}`}
                                    className="uploaded-image img-fluid"
                                />
                            ))}
                        </div>

                        <Form.Group className="mb-3" >

                            <Form.Label>Brand</Form.Label>
                            <Form.Select required aria-label="Please Select a Brand" onChange={(e) => setBrandVal(e.target.value)}>
                                <option>Please Select a Brand</option>
                                {
                                    brands.map((val, key) => <option key={key} value={val.BrandName}>{val.BrandName}</option>)
                                }

                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="mb-3" >

                            <Form.Label>Category</Form.Label>
                            <Form.Select required aria-label="Please Select a Category" onChange={(e) => setCategoryVal(e.target.value)}>
                                <option>Please Select a Category</option>
                                {
                                    categories.map((val, key) => <option key={key} value={val.CategoryName}>{val.CategoryName}</option>)
                                }
                            </Form.Select>
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Description" className='mb-3'>
                            <Form.Control
                                required
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>





                        <button type="submit" className="btn btn-primary" onClick={AddProduct} disabled={isProcessing}>
                            {isProcessing ? 'Adding Product...' : 'Submit'}
                        </button>
                    </form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ProductModal;