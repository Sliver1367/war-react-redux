import React from 'react';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import './App.css';
import {useSelector} from "react-redux";

const App = () => {

    const page = useSelector(state => state.page)

     switch (page) {
            case 'Game':
                return (
                    <div className={'field'}>
                        <Game/>
                    </div>
                )
            case 'Result':
                return (
                    <div className={'field'}>
                        <Result/>
                    </div>
                )
            default:
                return (
                    <div className={'field'}>
                        <Start/>
                    </div>
                )
        }

}

export default App;
