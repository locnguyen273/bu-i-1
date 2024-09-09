/* eslint-disable react/prop-types */
const ModalProductEdit = (props) => {
  const { selectedProduct, setSelectedProduct, handleUpdateItem } = props;

  const handleChangeForm = (event) => {
    setSelectedProduct({
      ...selectedProduct,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update Product
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="form-create-product-center">
              <div className="row mb-3">
                <div className="col-6">
                  <label className="form-label">Product Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="product id"
                    name="id"
                    value={selectedProduct.id}
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
                    value={selectedProduct.image}
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
                    value={selectedProduct.name}
                    onChange={handleChangeForm}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label">Product Type</label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedProduct.type}
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
                    value={selectedProduct.price}
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
                    value={selectedProduct.desc}
                    onChange={handleChangeForm}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateItem}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProductEdit;
