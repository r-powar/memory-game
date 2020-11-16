import React, {useEffect} from 'react';
import Board from "./Board";
import {initializeGird} from "../../utils/utilities";


function GameplayView({state, dispatch}) {
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
        return flipped.includes(id);
    };

    const findInCards = (id, arr) => {
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].length; j++){
                if(arr[i][j].id === id){
                    return arr[i][j];
                }
            }
        }
    };

    const checkMatch = (id) => {
        const clicked = findInCards(id, cards);
        const flip = findInCards(flipped[0], cards);

        return clicked.name === flip.name
    };

    const resetCards = () => {
      dispatch({
          type: "RESET",
          payload:{
              disable: false,
              flipped: []
          }
      })
    };

    const handleCardClick = (id) => {
        dispatch({
            type: "SET_DISABLE",
            payload: {
                val: true
            }
        });
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
        }else{
            if(checkClickedCard(id)) return;
            dispatch({
                type: "FLIP_CARD",
                payload:{
                    val: [flipped[0], id]
                }
            });
            if(checkMatch(id)){
                dispatch({
                    type: "SOLVED",
                    payload:{
                        val: [flipped[0], id]
                    }
                });
                resetCards()
            }else{
                setTimeout(resetCards, 1000)
            }
        }
    };

    return (
        <div className="container" style={{display: 'grid'}}>
            <Board cards={cards}
                   flipped={flipped}
                   handleClick={handleCardClick}
                   gameDisabled={gameDisabled}
                   solved={solved}
            />
        </div>
    );
}

export default GameplayView;