import FeedbackCard from './feedbackCard';
import './style.css'
const Feedback = () => {
    const feedbacks = [
        {
          name: 'Jenny Wilson',
          image: 'path_to_image_1.jpg',
          rating: 4,
          feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.'
        },
        {
          name: 'Dianne Russell',
          image: 'path_to_image_2.jpg',
          rating: 5,
          feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.'
        },
        {
          name: 'Devon Lane',
          image: 'path_to_image_3.jpg',
          rating: 5,
          feedback: 'Normally wings are wings, but theirs are lean meaty and tender; and just the right amount of crispy.'
        }
      ];
    return (
        <div className="feedback-container">
        <h2>Customer's Feedback</h2>
        <div className="feedback-list">
          {feedbacks.map((feedback, index) => (
            <FeedbackCard key={index} feedback={feedback} />
          ))}
        </div>
      </div>
    )
}
export default Feedback ;

