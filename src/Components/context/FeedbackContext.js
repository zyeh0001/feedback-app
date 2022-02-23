import { createContext, useState, useEffect } from 'react';
import FeedbackData from '../../data/feedbackData';
import { v4 as uuidv4 } from 'uuid';

const axios = require('axios');
const FeedbackContext = createContext();

export const FeebackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get('/feedback?_sort=id&_order=desc');
      setFeedback(response.data);
      setIsLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    try {
      const response = await axios.patch(`/feedback/${id}`, updItem);
      setFeedback(
        feedback.map((item) =>
          item.id === id ? { ...item, ...response.data } : item
        )
      );
    } catch (error) {}
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure?')) await axios.delete(`/feedback/${id}`);
    setFeedback(feedback.filter((feedback) => feedback.id !== id));
  };

  const addFeedback = async (newFeedback) => {
    try {
      const response = await axios.post('/feedback', newFeedback);
      console.log(response.data);
      setFeedback([response.data, ...feedback]);
    } catch (error) {}

    // newFeedback.id = uuidv4();
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
