/* eslint-disable react/prop-types */
// style for this component
import "./style.css";

const CardItem = (props) => {
  return (
    <div className="card-item">
      <div className="card-item-top">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="card-item-body">
        <p className="card-item-body-title">{props.name}</p>
        <div className="card-item-body-rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="card-item-body-price">${props.price}</p>
        <button className="card-item-body-add-to-cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
