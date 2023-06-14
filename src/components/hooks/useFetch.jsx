import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const useFetch = (initial, endpoint) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    const data = axios.get(endpoint);
    data.then((res) => setData(res)).catch((err) => console.log(err));
  }, [endpoint]);

  return { data: data };
};
