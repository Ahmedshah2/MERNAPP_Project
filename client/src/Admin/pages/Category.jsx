import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../firebase/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import UserCards from '../../User/Components/UserCards';


function CategoryModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [CategoryName, setCategoryName] = useState("")
  const [CategoryImage, setCategoryImage] = useState(null)

  const AddCategory = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `images/category/${CategoryImage.name}`);
    uploadBytes(storageRef, CategoryImage)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            const payload = { CategoryName, CategoryImage: url };
            axios.post('/api/createcategory', payload)
              .then((json) => {
                alert(json);

                setShow(false);
                // window.loacation.reload();
              })
              .catch(err => console.log(err.message));
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => console.log(error.message));
  }


  const [category, setCategory] = useState([])
  useEffect(() => {
    axios.get('/api/getallcategories')
      .then(json => setCategory(json.data.categories))
      .catch(err => alert(err.message))

  }, [])


  const deletecategory = (_id) => {
    console.log(_id)
    const payload = { _id }


    let config = {
      method: 'delete',
      url: '/api/deletecategory',
      data: payload
    };


    axios(config).then(json => console.log(json.data)).finally(window.location.reload()).catch(err => alert(err))

  }

  return (
    <>
      <Button className='mt-2' variant="dark" onClick={handleShow}>
        Add Category
      </Button>


      <div className="container-fluid my-5">

        <h2 className="text-center">Categories</h2>


        <div className="d-flex flex-wrap justify-content-center m-3">
          {
            category.map((val, key) => <div>
              <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} />
              <Button className='ms-4' variant="danger" onClick={deletecategory.bind(null, val._id)}>
                Delete Category
              </Button>
            </div>)
          }

        </div>
      </div>



      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={AddCategory}>
            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Category Name
              </label>
              <input
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="CategoryName"
                aria-describedby="emailHelp"
              />

            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
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

export default CategoryModal;