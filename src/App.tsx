import './App.css'
import Sidebar from './content/sidebar/sidebar';
import HeaderData from './content/header/header';
import { Layout } from 'antd';
import MainContent from './content/main-content/mainContent';
const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  padding:0,
  backgroundColor: '#242526',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100% - 60px)',
  lineHeight: 'calc(100% - 60px)',
  color: '#fff',
  backgroundColor: '#000',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  height: 'calc(100vh - 60px)',
  color: '#fff',
  backgroundColor: '#242526',
};



function App() {
  
  const { Header, Sider, Content } = Layout;
  return (
    <>
    <Layout >
      <Header style={headerStyle}>
        <HeaderData/></Header>
      <Layout>
        <Sider width="7%" style={siderStyle}>
          <Sidebar/>
        </Sider>
        <Content style={contentStyle}><MainContent/></Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App
