import React from 'react';

function Card({val, flipped, handleClick, disabled, solved}) {
    return (
        <div style={{display:'inline-block', border: '1px solid black'}}
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

export default Card;