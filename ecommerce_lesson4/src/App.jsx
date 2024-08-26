import "./style.css";
import CardItem from "./components/CardItem";

function App() {
  const listProductArray = [
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/black-sport-watch-768x768.png",
      name: "Black Sports Watch",
      price: 999,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/black-watch-768x768.png",
      name: "Black Watch",
      price: 199,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-1-768x768.png",
      name: "Chrome Watch",
      price: 299,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/watch-2-768x768.png",
      name: "Classic Watch",
      price: 399,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/custom-watch-768x768.png",
      name: "Custom Watch",
      price: 499,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/gold-watch-768x768.png",
      name: "Gold Watch",
      price: 599,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/navy-blue-watch-768x768.png",
      name: "Navy Blue Watch",
      price: 699,
    },
    {
      img: "https://xtratheme.com/elementor/watch-shop/wp-content/uploads/sites/79/2021/10/pink-watch-768x768.png",
      name: "Pink Watch",
      price: 799,
    },
  ];

  const handleViewDetail = (productItem) => {
    console.log(productItem)
  }
  return (
    <div className="list-product">
      <h3 className="list-product-title">List Products</h3>
      <div className="list-product-list">
        {/* map render array */}
        {listProductArray.length > 0 &&
          listProductArray.map((item) => (
            <CardItem
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
