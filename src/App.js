import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./Data/FeedbackData";


function App() {
    const [feedbackData, setFeedbackData] = useState(FeedbackData);

    const handleRemove = (id) => {
        if(window.confirm("Are you sure you want to remove?")) {
            setFeedbackData(feedbackData.filter(item => item.id !== id))
        }
    }

    return (
        <>
            <Header text={`Feedback UI`} />            
            <div className="container">
                <FeedbackStats feedback={feedbackData} />
                <FeedbackList feedback={feedbackData} handleRemove={handleRemove} />
            </div>
        </>
    )
}

export default App;