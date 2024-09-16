import "./style.css";
import data from "../../mockData.json";
import { useEffect, useState } from "react";
import ProductItem from "../../components/product-item/index";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    setProducts(data);
  }, []);

  useEffect(() => {
    console.log("productSelected: ", productSelected);
  }, [productSelected]);

  const handleViewDetail = (item)=> {
    setProductSelected(item)
    // chuyển sang 1 page khác : page dtail
  }

  return (
    <div className="row home-page">
      <div className="pl-5 col-8">
        <h3 className="text-center text-3xl">Danh sách sản phẩm</h3>
        <div className="list-products">
          {products.length > 0 &&
            products.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  item={item}
                  setProductSelected={setProductSelected}
                  handleViewDetail={handleViewDetail}
                />
              );
            })}
        </div>
      </div>

      <div className="col-4">
        <h3 className="text-center">Sản phẩm được chọn</h3>
        {/* !!productSelected */}
        {Object.keys(productSelected).length > 0 ? (
          <div className="pro-selected">
            <div className="product-item">
              <img
                className="product-item-image"
                src={productSelected.image}
                alt={productSelected.title}
              />
              <h5>{productSelected.title}</h5>
              <p>${productSelected.price}</p>
            </div>
          </div>
        ) : (
          <p> Chưa có sản phẩm được chọn</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
