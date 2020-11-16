import React, {useContext} from 'react';
import {GameContext} from "../../context/GameContext";
import PropTypes from 'prop-types';


const LobbyView = ({options}) => {

    const {dispatch} = useContext(GameContext);

    const handleOptionClick = (gameRowSize, gameColSize) => {
        dispatch({
            type: 'START_GAME',
            payload: {
                gameRowSize,
                gameColSize
            }
        })
    };

    return(
        <>
            <h4>Please select a grid option</h4>
            <div className="container"
                 style={{marginTop: '30px'}}
            >
                {
                    options.map((item) => {
                        return(
                            <div className="row"
                                 key={item.id}
                                 style={{width: '100%'}}
                                 onClick={() => {handleOptionClick(item.rowSize, item.colSize)}}
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
        </>

    )
};

LobbyView.propTypes = {
    options: PropTypes.array,
};

export default LobbyView;