import React, {useEffect} from 'react';
import Board from "./Board";
import {initializeGird, findInCards} from "../../utils/utilities";
import BackButton from "./BackButton";
import PropTypes from 'prop-types';

function GamePlayView({state, dispatch}) {
    const {
        cards, gameRowSize, gameColSize,
        flipped, gameDisabled, solved
    } = state;

    useEffect(() => {
        const grid = initializeGird(gameRowSize, gameColSize);
        dispatch({
            type: "INIT_GAME",
            payload: {
                grid
            }
        })
    }, []);


    const checkClickedCard = (id) => {
        console.log(flipped, id);
        return flipped.includes(id);
    };


    const checkMatch = (id) => {
        const clicked = findInCards(id, cards);
        const flip = findInCards(flipped[0], cards);

        return clicked.name === flip.name
    };

    const resetCards = () => {
        dispatch({
            type: "RESET",
            payload: {
                disable: false,
                flipped: []
            }
        })
    };

    const handlePreviousClick = (e) => {
        e.preventDefault();
        dispatch({
            type: "END_GAME",
            payload:{}
        })
    };

    const handleCardClick = (id) => {
        if(!checkClickedCard(id)){
            dispatch({
                type: "SET_DISABLE",
                payload: {
                    val: true
                }
            });
        }

        if (flipped.length === 0) {
            dispatch({
                type: "FLIP_CARD",
                payload: {
                    val: [id]
                }
            });

            dispatch({
                type: "SET_DISABLE",
                payload: {
                    val: false
                }
            })
        } else {
            if (checkClickedCard(id)) return;

            dispatch({
                type: "FLIP_CARD",
                payload: {
                    val: [flipped[0], id]
                }
            });

            if (checkMatch(id)) {
                dispatch({
                    type: "SOLVED",
                    payload: {
                        val: [flipped[0], id]
                    }
                });
                resetCards()
            } else {
                setTimeout(resetCards, 1000)
            }

        }
    };

    return (
        <>
            <div style={{ textAlign: 'left', padding: '10px'}}>
                <BackButton handleClick={handlePreviousClick}/>
            </div>
            <div style={{display: 'grid', rowGap: '5px'}} >
                <Board cards={cards}
                       flipped={flipped}
                       handleClick={handleCardClick}
                       gameDisabled={gameDisabled}
                       solved={solved}
                />
            </div>
        </>

    );
}

GamePlayView.propTypes = {
    state: PropTypes.object,
    dispatch: PropTypes.func,
};

export default GamePlayView;