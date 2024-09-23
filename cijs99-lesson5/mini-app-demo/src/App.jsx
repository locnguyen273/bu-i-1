import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./components/spinner/index";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    limit: 10,
    skip: 1,
  });

  useEffect(() => {
    handleCallApiByAxios();
  }, []);

  const handleCallApiByAxios = async () => {
    // axios có các phương thức là GET, POST, PUT, DELETE
    /// CRUD: Create - Read - Update - Delete
    // limit=10&skip=10&sortBy=title&order=asc
    setIsLoading(true);
    try {
      const res = await axios.get("https://dummyjson.com/products", {
        params: {
          limit: Number(formValue.limit),
          skip: Number(formValue.skip),
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

  const handleChangeEvent = (e) => {
    setFormValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleGetData = (e) => {
    e.preventDefault();
    handleCallApiByAxios();
  }

  return (
    <div className=" container">
      <h3 className="text-center my-4">Demo call api by axios</h3>
      <form className="d-flex gap-4">
        <input type="number" className="form-control" name="limit" value={formValue.limit} onChange={handleChangeEvent} />
        <input type="number" className="form-control" name="skip" value={formValue.skip} onChange={handleChangeEvent} />
        <button className="btn btn-success" onClick={handleGetData}>Get Data</button>
      </form>
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
                  <button className="btn btn-primary">View Detail</button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
