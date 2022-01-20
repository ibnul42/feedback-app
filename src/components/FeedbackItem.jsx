import React, { useContext } from 'react';
import Card from './Shared/Card';
import PropsType from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa'

function FeedbackItem({ item }) {
    const { handleRemove, editFeedback } = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleRemove(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <button className='edit' onClick={() => editFeedback(item)}>
                <FaEdit color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropsType.object
}

export default FeedbackItem
