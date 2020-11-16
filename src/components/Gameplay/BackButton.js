import React from 'react';
import {gameBackButton} from "../../images";

function BackButton({handleClick}) {
    return (
        <button onClick={(e) => handleClick(e)}>
            <img src={gameBackButton}
                 alt="previous"
                 width={25}
                 height={25}
            />
        </button>
    );
}

export default BackButton;