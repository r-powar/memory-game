import React from 'react';
import Card from "./Card";

function Board({cards, flipped, handleClick, gameDisabled, solved}) {
    console.log("Cards", cards);
    return (
        cards.map((item, index) => {
            return(
                <div className="row" key={index}>
                    <div className="col">
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

export default Board;