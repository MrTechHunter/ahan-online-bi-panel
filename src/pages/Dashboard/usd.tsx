import { useEffect, useState } from 'react';
import { Area } from '@ant-design/plots';

const Usd = () => {
  const [data, setData] = useState([]);

  const asyncFetch = () => {
    fetch('http://127.0.0.1:8000/Dollarprice/')
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
    xField: 'shamsidate',
    yField: 'closed',
    xAxis: {
      range: [0, 1],
      tickCount: 5,
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    },
  };

  return <Area {...config} />;
};

export default Usd;
