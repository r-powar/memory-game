import React, {useContext} from 'react';
import {GameContext} from "../../context/GameContext";

const handleOptionClick = (gameRowSize, gameColSize, dispatch) => {
    dispatch({
        type: 'START_GAME',
        payload: {
            gameRowSize,
            gameColSize
        }
    })
};

const LobbyView = ({options}) => {

    const {dispatch} = useContext(GameContext);

    return(
        <div className="container"
            style={{marginTop: '30px'}}
        >
            {
                options.map((item) => {
                    return(
                        <div className="row"
                             key={item.id}
                             style={{width: '100%'}}
                             onClick={() => {handleOptionClick(item.rowSize, item.colSize, dispatch)}}
                        >
                            <a href="#" className="waves-effect waves-light btn-large"
                               style={{ width: '50%'}}
                            >
                                {item.value}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default LobbyView;