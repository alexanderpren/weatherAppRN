import React, {useState, useEffect} from 'react';
import axios from 'axios';


const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {loading, data};
};

export default useFetch;
