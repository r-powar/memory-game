export const initialState = {
    isLobbyView: true,
    isGamePlayView: false,
    gameOptions: [
        {
            rowSize: 3,
            colSize: 4,
            value: "3 x 4",
            id: 1
        },
        {
            rowSize: 5,
            colSize: 2,
            value: "5 x 2",
            id: 2
        },
        {
            rowSize: 4,
            colSize: 4,
            value: "4 x 4",
            id: 3
        },
        {
            rowSize: 4,
            colSize: 5,
            value: "4 x 5",
            id: 4
        }
    ],
    gameRowSize: 0,
    gameColSize: 0
};

const rootReducer = (state = initialState, action) => {
    const {gameRowSize, gameColSize} = action.payload;

    if(action.type === 'START_GAME'){
        return {
            ...state,
            gameRowSize,
            gameColSize,
            isGamePlayView: !state.isGamePlayView,
            isLobbyView: !state.isLobbyView
        }
    }
    return state;
};

export default rootReducer;