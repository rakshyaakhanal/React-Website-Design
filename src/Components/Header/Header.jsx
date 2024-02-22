import React from 'react';

const Header = ({ title, image, children }) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div className='header-container-bg'>
                    <img src={image} alt='Header Background Image' />
                </div>

                <div className='header-content'>
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
}

export default Header;