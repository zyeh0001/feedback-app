import React, { useContext } from 'react';
import FeedbackContext from './context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from 'framer-motion';
function FeedbackList({ handleDelete }) {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={feedback.id} item={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
