import './style.css';
import StatCard from './statCard';

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
        {stats.map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>
  );
}

export default StatContainer;
