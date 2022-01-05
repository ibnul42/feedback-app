import React, { useState } from 'react';
import FeedbackData from '../../Data/FeedbackData';
import FeedbackForm from '../FeedbackForm';
import FeedbackList from '../FeedbackList';
import FeedbackStats from '../FeedbackStats';
import { v4 as uuidv4 } from 'uuid';

function HomePage() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove?")) {
            setFeedbackData(feedbackData.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback.id);
        setFeedbackData([newFeedback, ...feedbackData]);
    }
    return (
        <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStats feedback={feedbackData} />
            <FeedbackList feedback={feedbackData} handleRemove={handleRemove} />
        </div>
    )
}

export default HomePage
