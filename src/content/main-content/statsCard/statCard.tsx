import React from 'react';
import './statCard.css';
import image from '../../../assets/store.svg'
interface Stat {
  title: string;
  value: number | string;
  icon: string;
  change: string;
  isIncrease: boolean;
}

interface StatCardProps {
  stat: Stat;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  const { title, value, change, isIncrease } = stat;

  return (
    <div className="stat-card">
      <div className="stat-icon">
        <img src={image} alt={title} />
      </div>
      <div className="stat-info">
        <p>{title}</p>
        <div className='stat-last'>
        <h3>{value}</h3>
        <p className={isIncrease ? 'increase' : 'decrease'}>
          {isIncrease ? '▲' : '▼'} {change}
        </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
