import FeedbackItem from "./FeedbackItem";
import PropsType from 'prop-types';


function FeedbackList({ feedback, handleRemove }) {
    
    if (!feedback) {
        return <h2>No data found</h2>
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item, index) => (
                <FeedbackItem key={index} item={item} handleRemove={handleRemove} />
            ))}

        </div>
    )
}

FeedbackList.propTypes = {
    feedback: PropsType.arrayOf(
        PropsType.shape({
            id: PropsType.string.isRequired,
            text: PropsType.string.isRequired,
            rating: PropsType.number.isRequired
        })
    )
}

export default FeedbackList
