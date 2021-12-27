import React from 'react';
import Card from './Shared/Card';
import PropsType from 'prop-types';
import { FaTimes } from 'react-icons/fa'

function FeedbackItem({ item, handleRemove }) {

    
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleRemove(item.id)} className='close'>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropsType.object
}

export default FeedbackItem
