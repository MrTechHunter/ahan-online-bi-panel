import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';

import './Dashboard.less';

import Usd from './Dashboard/usd';
import Trend from './Dashboard/trend';

const { Title } = Typography;

const Dashboard = () => {
  return (
    <PageContainer>
      <Card>
        <Title>Tred chart</Title>
        <Trend />
      </Card>
      <Card>
        <Title>Usd chart</Title>
        <Usd />
      </Card>
    </PageContainer>
  );
};

export default Dashboard;
