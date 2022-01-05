import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIconLink() {
    return (
        <div className='about-link'>
            {/* <Link to='/about'>
                <FaQuestion />
            </Link> */}
            <a href="/about">
                <FaQuestion size={30} />
            </a>
        </div>
    )
}

export default AboutIconLink
