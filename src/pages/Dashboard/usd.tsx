import { useEffect, useState } from 'react';
import { Line } from '@ant-design/charts';

const Usd = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('http://127.0.0.1:8000/Productsview/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.results);
        setData(json);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    height: 400,
    xField: 'createdon',
    yField: 'close',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return <Line {...config} />;
};

export default Usd;
