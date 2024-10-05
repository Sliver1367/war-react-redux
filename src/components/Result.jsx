import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction} from "../store/warActions";

const Result = () => {

    const playerWins = useSelector(state => state.playerWins)
    const compWins = useSelector(state => state.compWins)
    const dispatch = useDispatch()

    const getResult = ()=>{
        if(playerWins > compWins){
            return 'WIN'
        }
        if(playerWins < compWins){
            return 'LOSE'
        }
        return 'DRAW'
    }
    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>{getResult()}</h1>
            <h2 className={'readyForWar small'}>{playerWins} - {compWins}</h2>
            <button className={'startButton'} onClick={()=> dispatch(changePageAction('Game'))}>
                Again</button>
        </div>
    );
};

export default Result;