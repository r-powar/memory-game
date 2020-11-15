import React, {createContext, useReducer} from 'react';
import rootReducer, {initialState} from "../reducers/rootReducer";

export const GameContext = createContext();

const GameContextProvider = (props) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return(
        <GameContext.Provider value={{ state, dispatch }}>
            {props.children}
        </GameContext.Provider>
    )
};

export default GameContextProvider;