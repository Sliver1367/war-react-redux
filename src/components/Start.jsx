import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changePageAction, setNameAction} from "../store/warActions";

const Start = () => {

    const [name, setName] = useState('')
    const dispatch = useDispatch()

       return (
            <div className={'playerForm'}>
                <h1 className={'readyForWar'}>Ready to war</h1>
                <input className={'playerName'} onChange={e=>setName(e.target.value)} type='text'
                       placeholder='Enter your name'/>
                <button className={'startButton'} onClick={() =>
                {
                    dispatch(changePageAction('Game'))
                    dispatch(setNameAction(name))
                }}>Start</button>
            </div>
        );

}

export default Start;