import React from 'react';
import PropsType from 'prop-types';

function Card({children, reverse}) {
    return (
          <div className={`card ${reverse ? 'reverse': ''}`}>{children}</div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropsType.node.isRequired,
    reverse: PropsType.bool
}

export default Card
