import React from 'react';
import { Layout } from 'antd';
import ResetNewPassword from '../Page/ResetNewPassword/ResetNewPassword';

const { Sider, Content } = Layout;

const ResetNewPasswordTemplate = () => {
  return (
    <React.Fragment>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ width: '592px', backgroundColor: '#E5E5E5' }}>
          <ResetNewPassword />
        </Content>
        <Sider width={'848px'}>
          <div
            style={{
              height: '100vh',
              backgroundImage: 'url(./images/poster02.png)',
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

export default ResetNewPasswordTemplate;
