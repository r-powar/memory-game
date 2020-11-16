import React, {useContext} from 'react';
import {GameContext} from "../../context/GameContext";
import LobbyView from "../Lobby/LobbyView";
import GamePlayView from "../Gameplay/GameplayView";

const MemoryGame = () =>{
    const {state, dispatch} = useContext(GameContext);
    const {isLobbyView, isGamePlayView, gameOptions} = state;

    return(
        <div>
            {isLobbyView && (<LobbyView options={gameOptions}/>)}
            {isGamePlayView && (<GamePlayView state={state} dispatch={dispatch} />)}
        </div>
    )

};

export default MemoryGame;