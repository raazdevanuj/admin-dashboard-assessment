import { Col, Row } from 'antd';
import './style.css'
import Table from './table/table';
import Feedback from './feedback/feedback';
import Netprofit from './netprofit/netprofit'
import StatContainer from './statsCard/statContainer';
import MenuList from './menu-list/menulist';
import Activity from './activityChart/activity';
const MainContent = ()=> {
    return (
        <div className='container' id="id-container">
        <Row>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <StatContainer/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
             <Netprofit/>
            </Col>
        </Row>
        <div className='space'></div>
        <Row>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Activity />
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
             <MenuList/>
            </Col>
        </Row>
                <div className='space'></div>
            <Row>
            <Col xs={24} sm={24} md={24} lg={16} xl={16}>
            <Table/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <Feedback/>
            </Col>
        </Row>
        </div>
    )
} 
export default MainContent;