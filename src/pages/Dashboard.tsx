import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

import './Dashboard.less';

import Nickel from './Dashboard/nickel';
import Usd from './Dashboard/usd';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <PageContainer>
      <Card>
        <Title>Nickel chart</Title>
        <Nickel />
      </Card>
      <Card>
        <Title>Usd chart</Title>
        <Usd />
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
