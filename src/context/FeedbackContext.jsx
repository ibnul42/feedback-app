import {createContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../Data/FeedbackData';

const FeedBackContext = createContext();

export const FeedbackProvider = ({children}) => {
    // let data = useState(FeedbackData);
    // console.log(data[0]);
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This is from Context',
            rating: 5
        }
    ]);

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove?")) {
            setFeedback(feedback.filter(item => item.id !== id))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        console.log(newFeedback.id);
        setFeedback([newFeedback, ...feedback]);
    }

    return <FeedBackContext.Provider value={{
        feedback,
        handleRemove,
        addFeedback
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext;