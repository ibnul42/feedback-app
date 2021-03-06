import React, { useContext, useEffect, useState } from 'react'
import FeedBackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './Shared/Button';
import Card from './Shared/Card'

function FeedbackForm() {
    const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedBackContext);

    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    useEffect(() => {
        if (feedbackEdit.edit) {
            setBtnDisabled(true);
            setText(feedbackEdit.item.text);
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true);
            setMessage('');
        } else if (text !== '' && text.trim().length <= 10) {
            setBtnDisabled(true);
            setMessage('Message must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage('');
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            };

            if (feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            setText('');
            setBtnDisabled(true);
        }

    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Give your feedback for us</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" onChange={handleTextChange} placeholder='Write your review' value={text} />
                    <Button type="submit" version='primary' isDisabled={btnDisabled} >Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
