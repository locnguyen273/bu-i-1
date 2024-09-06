import { useState } from "react";
import "./App.css";

function App() {
  const [formValue, setFormValue] = useState({
    id: null,
    image: null,
    name: null,
    type: null,
    price: null,
    desc: null
  });

  const handleChangeForm = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    })
  }

  const handleCreateNewProduct = () => {
    console.log("formValue", formValue)
  }

  return (
    <>
      {/*start form create product */}
      <h4 className="mt-5 text-center text-danger">Create new product</h4>
      <div className="form-create-product">
        <div className="form-create-product-top">
          <h6>Product Information</h6>
        </div>
        <div className="form-create-product-center">
          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">Product Id</label>
              <input
                type="text"
                className="form-control"
                placeholder="product id"
                name="id"
                value={formValue.id}
                onChange={handleChangeForm}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Product Image</label>
              <input
                type="text"
                className="form-control"
                placeholder="product image link"
                name="image"
                value={formValue.image}
                onChange={handleChangeForm}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="product name"
                name="name"
                value={formValue.name}
                onChange={handleChangeForm}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Product Type</label>
              <select
                className="form-select"
                aria-label="Default select example"
                value={formValue.type}
                name="type"
                onChange={handleChangeForm}
              >
                <option selected>Open this select type product</option>
                <option value="phone">Phone</option>
                <option value="tablet">Tablet</option>
                <option value="laptop">Laptop</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-6">
              <label className="form-label">Product Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="product price"
                name="price"
                value={formValue.price}
                onChange={handleChangeForm}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Product description</label>
              <input
                type="text"
                className="form-control"
                placeholder="product description"
                name="desc"
                value={formValue.desc}
                onChange={handleChangeForm}
              />
            </div>
          </div>
        </div>
        <div className="form-create-product-bottom">
          <button className="btn btn-primary col-2" onClick={handleCreateNewProduct}>Create</button>
          <button className="btn btn-success col-2">Update</button>
        </div>
      </div>
      {/*end form create product */}
    </>
  );
}

export default App;
