import axios from "axios";
import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataFromAPI = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getDataFromAPI();
  }, [url]);

  return { data, loading, error };
};

export default useGetData;
