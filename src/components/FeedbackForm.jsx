import React, { useState } from 'react'
import RatingSelect from './RatingSelect';
import Button from './Shared/Button';
import Card from './Shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(10);

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage('');
        } else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true);
            setMessage('Message must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage('');
        }
        setText(e.target.value);
    }

    return (
        <Card>
            <form>
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
