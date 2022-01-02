import PropsType from 'prop-types';


function FeedbackStats({ feedback }) {

    let average = feedback.reduce((acc, item) =>  (        
        acc += item.rating
    ),0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
           <h4>{feedback.length} Reviews</h4>
           <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )
}

FeedbackStats.propTypes = {
    feedback: PropsType.arrayOf(
        PropsType.shape({
            id: PropsType.number.isRequired,
            text: PropsType.string.isRequired,
            rating: PropsType.number.isRequired
        })
    )
}

export default FeedbackStats
