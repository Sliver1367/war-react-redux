import {CHANGE_PAGE, SET_COMP_WINS, SET_NAME, SET_PLAYER_WINS} from "./warActions";

export const warReducer = (state, action) =>
{
    switch (action.type)
    {
        case SET_NAME: return {...state, name: action.payload}
        case CHANGE_PAGE: return {...state, page: action.payload}
        case SET_COMP_WINS: return {...state, compWins: action.payload}
        case SET_PLAYER_WINS: return {...state, playerWins: action.payload}
        default: return state
    }
}