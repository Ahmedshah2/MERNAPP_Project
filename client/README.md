
# Project Title

Project Name: E-commerce Website

Description:
1-Product Management
2-User Authentication
3-Shopping Cart
4-Order History
5-Firebase for image url and storage
6-Admin Panel
7-Nodemailer
8-Email service and checkout

 This Project is a full-stack MERN (MongoDB, Express.js, React, Node.js) e-commerce platform that provides a seamless online shopping experience. With a user-friendly interface, it offers a wide range of products, powerful search and filtering options, secure user authentication, and a robust shopping cart and checkout system. Shop for your favorite products, manage your orders, and explore a diverse catalog of items, your one-stop online shopping destination.
## API Reference

#### Get all items

```http
  POST /api/login

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**  |
| `password` | `string` | **Required** |

#### Get item

```http
  POST /api/signup
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | **Required** |
| `email` | `string` | **Required**  |
| `password` | `string` | **Required** |


POST /api/placeorder

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `customerName`      | `string` | **Required** |
| `customerEmail` | `string` | **Required**  |
| `customerId` | `string` | **Required** |
| `customerContact` | `string` | **Required** |
| `customerAddress` | `string` | **Required** |
| `order` | `array` | **Required** |


POST /api/createproduct
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `productname`      | `string` | **Required** |
| `thumbnail` | `string` | **Required**  |
| `description` | `string` | **Required** |
| `price` | `string` | **Required** |
| `category` | `string` | **Required** |
| `brand` | `string` | **Required** |
| `images` | `array` | **Required** |


GET apis

```http
GET  /api/getallusers

GET  /api/getallproducts

GET  /api/getproductbycategory ```requires Parameter "category"

GET /api/getproductbyid   ```requires query "_id"

GET /api/getallorders

GET /api/trackorder     ``` requires param "_id"

GET /api/getallcategories

GET /api/getallbrands


POST apis

```http

POST /api/createbrand  ``` requires "BrandName" and "BrandImage" in body

POST /api/createcategory  ``` requires "CategoryName" and "CategoryImage" in body


Delete apis
``` http

DELETE /api/deletecategory  ```requires  "CategoryName" in query

UPDATE /api/updatecategory ```requires "_id", "CategoryName" and "CategoryImage" in body
## Authors

- [@octokatherine](https://github.com/Ahmedshah2)

Ahmed Shah
