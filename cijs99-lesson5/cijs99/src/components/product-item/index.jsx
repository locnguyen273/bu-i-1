/* eslint-disable react/prop-types */
import "./style.css";

const ProductItem = (props) => {
  const { item, setProductSelected } = props;
  return (
    <div className="product-item">
      <img className="product-item-image" src={item.image} alt={item.title} />
      <h5>{item.title}</h5>
      <p>${item.price}</p>
      <button
        className="btn btn-primary"
        onClick={() => setProductSelected(item)}
      >
        View Detail
      </button>
    </div>
  );
};

export default ProductItem;
