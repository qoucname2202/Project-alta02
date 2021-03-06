import React from 'react';
import { Layout } from 'antd';
import Login from '../Page/Login/Login';
const { Sider, Content } = Layout;

const UserLoginTemplated = () => {
  return (
    <React.Fragment>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ width: '592px', backgroundColor: '#E5E5E5' }}>
          <Login></Login>
        </Content>
        <Sider width={'848px'}>
          <div
            style={{
              height: '100vh',
              backgroundImage: 'url(./images/poster01.png)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              objectFit: 'cover',
            }}
          ></div>
        </Sider>
      </Layout>
    </React.Fragment>
  );
};

export default UserLoginTemplated;
