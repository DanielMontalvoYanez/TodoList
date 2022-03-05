import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);

  //   useEffect(() => {}, []);

  return [data, setData];
};
export default useFetch();
