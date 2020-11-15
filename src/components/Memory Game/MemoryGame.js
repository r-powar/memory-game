import React, {useContext} from 'react';
import {GameContext} from "../../context/GameContext";
import LobbyView from "../Lobby/LobbyView";
import GamePlayView from "../Gameplay/GameplayView";

const MemoryGame = () =>{
    const {state} = useContext(GameContext);
    const {isLobbyView, isGamePlayView, gameOptions} = state;

    console.log('State', state);
    return(
        <div>
            {isLobbyView && (<LobbyView options={gameOptions}/>)}
            {isGamePlayView && (<GamePlayView/>)}
        </div>
    )

};

export default MemoryGame;