import React from 'react';
import Card from "./Card";
import PropTypes from 'prop-types';

function Board({cards, flipped, handleClick, gameDisabled, solved}) {
    return (
        cards.map((item, index) => {
            return(
                <div key={index}>
                    <div>
                        {
                            item.map((val) => {
                                return(
                                    <Card val={val}
                                          key={val.id}
                                          flipped={flipped.includes(val.id)}
                                          handleClick={handleClick}
                                          disabled={gameDisabled}
                                          solved={solved.includes(val.id)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            )
        })

    );
}

Board.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({}))),
    flipped: PropTypes.array,
    handleClick: PropTypes.func,
    gameDisabled: PropTypes.bool,
    solved: PropTypes.array
};

export default Board;