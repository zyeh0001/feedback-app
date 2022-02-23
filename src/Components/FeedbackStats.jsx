import React, { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let avg =
    feedback.reduce((currentSum, item) => {
      // console.log(item.rating);
      return (currentSum += item.rating);
    }, 0) / feedback.length;
  avg = avg.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg} </h4>
    </div>
  );
}

export default FeedbackStats;
