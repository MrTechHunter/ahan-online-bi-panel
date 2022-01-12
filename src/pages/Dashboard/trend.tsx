import { useEffect, useState } from 'react';
import { Line } from '@ant-design/plots';

const Trend = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('http://127.0.0.1:8000/Productpricesview/?limit=100')
      .then((response) => response.json())
      .then((json) => {
        setData(json.results);
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
    width: 800,
    xField: 'date',
    yField: 'productidname',
    seriesField: 'price',
    yAxis: {
      label: {
        formatter: (v: any) => `${v}`.replace(/\d{1,2}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  return <Line {...config} />;
};

export default Trend;
