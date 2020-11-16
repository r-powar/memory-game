import React from 'react';
import PropTypes from 'prop-types';

function Card({val, flipped, handleClick, disabled, solved}) {
    return (
        <div style={{display:'inline-block', margin: '2px'}}
            onClick={() => disabled ? null : handleClick(val.id)}
        >
            <img
                src={flipped || solved ? val.link : val.back}
                alt={val.name}
                width={100}
                height={100}
            />
        </div>
    );
}

Card.propTypes = {
    val: PropTypes.object,
    flipped: PropTypes.bool,
    handleClick: PropTypes.func,
    disabled: PropTypes.bool,
    solved: PropTypes.bool
};

export default Card;