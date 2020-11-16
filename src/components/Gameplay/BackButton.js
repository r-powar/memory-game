import React from 'react';
import {gameBackButton} from "../../images";
import PropTypes from 'prop-types';

function BackButton({handleClick}) {
    return (
        <button onClick={(e) => handleClick(e)}
        >
            <img src={gameBackButton}
                 alt="previous"
                 width={25}
                 height={25}
            />
        </button>
    );
}

BackButton.propTypes = {
    handleClick: PropTypes.func,
};

export default BackButton;