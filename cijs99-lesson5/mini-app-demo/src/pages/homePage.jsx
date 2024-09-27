import Spinner from "./../components/spinner/index";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleCallApiByAxios();
  }, []);

  const handleCallApiByAxios = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products", {
        params: {
          limit: 8,
          skip: 1,
          sortBy: "title",
          order: "asc",
        },
      });
      if (res?.status === 200) {
        setProducts(res?.data?.products);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (err) {
      setIsLoading(false);
      console.log("err", err);
    }
  };

  const handleViewDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <h3 className="text-center my-4">Demo call api by axios</h3>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="list-product">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <div className="list-product-item" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />

                  <h6>{product.title}</h6>
                  <p>{product.category}</p>
                  <p>{product.price}</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleViewDetail(product.id)}
                  >
                    View Detail
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default HomePage;
