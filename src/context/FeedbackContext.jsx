import { createContext, useEffect, useState } from 'react';

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
        const response = await fetch(`/feedback?_sort=id&_order=desc`);
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
    const addFeedback = async (newFeedback) => {

        const response = await fetch(`/feedback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback)
        });

        const data = await response.json();

        setFeedback([data, ...feedback]);
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