import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./Data/FeedbackData";
import { v4 as uuidv4 } from 'uuid';


function App() {

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
        <>
            <Header text={`Feedback UI`} />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedbackData} />
                <FeedbackList feedback={feedbackData} handleRemove={handleRemove} />
            </div>
        </>
    )
}

export default App;