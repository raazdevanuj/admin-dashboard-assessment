import React from 'react';
import profile from '../../../assets/profile.svg'
import './feedbackCard.css';

interface Feedback {
  name: string;
  image: string;
  rating: number;
  feedback: string;
}

interface FeedbackCardProps {
  feedback: Feedback;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ feedback }) => {
  const { name, rating, feedback: comment } = feedback;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="feedback-card">
        <div className='header'>
      <img src={profile} alt={name} className="customer-image" />
        <h3>{name}</h3>
        </div>
      <div className='content' >
        <div className="stars">{renderStars(rating)}</div>
        <div className='comment'>{comment}</div>
      </div>
    </div>
  );
};

export default FeedbackCard;
