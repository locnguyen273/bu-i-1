import { useState } from "react";
import "./App.css";
import ModalProductEdit from "./components/modalProductEdit";

function App() {
  const [formValue, setFormValue] = useState({
    id: "",
    image: "",
    name: "",
    type: "phone",
    price: 0,
    desc: "",
  });

  const [listProducts, setListProduct] = useState([
    {
      id: "1",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/303825/iphone-15-plus-512gb-den-2.jpg",
      name: "ip15 plus",
      type: "phone",
      price: 34000000,
      desc: "Điện thoại iPhone 15 128GB",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState({});

  const handleChangeForm = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateNewProduct = () => {
    let newArrPro = [...listProducts];
    const newDataItem = {
      ...formValue,
      quantity: 1,
    };
    newArrPro.push(newDataItem);
    setListProduct(newArrPro);
    setFormValue({
      id: "",
      image: "",
      name: "",
      type: "phone",
      price: 0,
      desc: "",
    });
  };

  const handleDeleteItem = (proItd) => {
    let index = listProducts.findIndex((item) => item.id === proItd);
    if (index !== -1) {
      // listProducts.splice(index, 1); // hoặc có thể dùng filter
      let deletedItem = listProducts.filter((item) => item.id !== proItd);
      setListProduct(deletedItem);
      handleRenderLisProduct();
    }
  };

  const handleUpdateItem = () => {
    const listProductNotIncludeSelect = listProducts.filter(pro => pro.id !== selectedProduct.id);
    let newArrUpdate = listProductNotIncludeSelect;
    newArrUpdate.push(selectedProduct)
    setListProduct(newArrUpdate);
  };

  const handleSelectedProduct = (proId) => {
    const selected = listProducts.find((product) => product.id === proId);
    setSelectedProduct(selected);
  };

  const handleRenderLisProduct = () => {
    return listProducts.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt="..." width={50} />
          </td>
          <td>{item.desc}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td className="d-flex gap-2">
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteItem(item.id)}
            >
              Delete
            </button>

            <button
              type="button"
              className="btn btn-primary ml-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleSelectedProduct(item.id)}
            >
              Edit
            </button>
            {/* <ModalProductEdit /> */}
          </td>
        </tr>
      );
    });
  };

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
                <option>Open this select type product</option>
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
          <button
            className="btn btn-primary col-2"
            onClick={handleCreateNewProduct}
          >
            Create
          </button>
          <button className="btn btn-success col-2">Update</button>
        </div>
      </div>
      {/*end form create product */}

      <table className="table table-product">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listProducts.length > 0 ? (
            handleRenderLisProduct()
          ) : (
            <p className="table-product-txt-empty">Is Empty</p>
          )}
        </tbody>
      </table>
      <ModalProductEdit
        selectedProduct={selectedProduct}
        handleChangeForm={handleChangeForm}
        setSelectedProduct={setSelectedProduct}
        handleUpdateItem={handleUpdateItem}
      />
    </>
  );
}

export default App;
