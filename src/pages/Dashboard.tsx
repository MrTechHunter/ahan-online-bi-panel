import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card } from 'antd';

import { Line } from '@ant-design/charts';

import './Dashboard.less';

const Dashboard: React.FC = () => {
  const data = [
    { year: '2013', value: 18325 },
    { year: '2014', value: 14720 },
    { year: '2015', value: 15165 },
    { year: '2016', value: 8620 },
    { year: '2017', value: 9955 },
    { year: '2018', value: 13600 },
    { year: '2019', value: 12480 },
    { year: '2020', value: 12850 },
    { year: '2021', value: 17691 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };

  return (
    <PageContainer>
      <Card>
        <Line {...config} />
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
