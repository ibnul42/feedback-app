import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback();
    }, []);

    // fetch Feedback from Database
    const fetchFeedback = async () => {
        const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
        const result = await response.json();
        setFeedback(result);
        setIsLoading(false);
    }

    // delete Feedback
    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    // add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback.id);
        setFeedback([newFeedback, ...feedback]);
    }

    // set Feedback for edit
    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit: true
        })
    }

    // edit Feedback
    const updateFeedback = (id, updFeedback) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? { ...item, ...updFeedback } : item))
        )
    }

    return <FeedBackContext.Provider value={{
        feedback,
        handleRemove,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        isLoading
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;