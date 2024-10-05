import {createStore} from "redux";
import {warReducer} from "./warReducer";

const initialState =
    {
        page: 'Start',
        name: '',
        compWins: 0,
        playerWins: 0
    }

export const store = createStore(warReducer, initialState)