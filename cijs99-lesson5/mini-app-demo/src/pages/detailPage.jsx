import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from './../components/spinner/index';
import axios from 'axios';

const DetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProductById();
  }, [id]);

  const getProductById = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      if (res?.status === 200) {
        setProducts(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (err) {
      setIsLoading(false);
      console.log("err", err);
    }
  };

  return (
    <>
    {
      isLoading ? <Spinner /> : 
        <div>
          <h5>DetailPage: {id}</h5>
          <img src={products.thumbnail} alt={products.title} width={300} />
          <ul>
            <li>title: {products.title}</li>
            <li>category: {products.category}</li>
            <li>description: {products.description}</li>
            <li>title: {products.title}</li>
          </ul>
        </div>
        
      }
    </>
  );
};

export default DetailPage;
