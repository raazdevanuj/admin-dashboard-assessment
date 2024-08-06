import './style.css';
import StatCard from './statCard';
import { Col, Row } from 'antd';

const StatContainer = () => {
  const stats = [
    {
      title: 'Total Orders',
      value: 75,
      icon: 'path_to_icon_1.png',
      change: '3%',
      isIncrease: true
    },
    {
      title: 'Total Delivered',
      value: 70,
      icon: 'path_to_icon_2.png',
      change: '3%',
      isIncrease: false
    },
    {
      title: 'Total Cancelled',
      value: 5,
      icon: 'path_to_icon_3.png',
      change: '3%',
      isIncrease: true
    },
    {
      title: 'Total Revenue',
      value: '$12k',
      icon: 'path_to_icon_4.png',
      change: '3%',
      isIncrease: false
    }
  ];

  return (
      <div className="stats-container">
         <Row>
        {stats.map((stat, index) => (
           <Col xs={12} sm={12} md={12} lg={6} xl={6} span={6}>
          <StatCard key={index} stat={stat} />
          </Col>
        ))}
        </Row>
      </div>
  );
}

export default StatContainer;
