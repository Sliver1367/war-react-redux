import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction, setCompWinsAction, setPlayerWinsAction} from "../store/warActions";

let compCards = []
let playerCards = []
let compWins = 0;
let playerWins = 0;

const Game = () => {
    const [compCard, setCompCard] = useState('Computer card')
    const [playerCard, setPlayerCard] = useState('Player card')
    const dispatch = useDispatch()
    const name = useSelector(state => state.name)

     const handleClickNext = () => {
        if (compCards.length) {
            const compCard = compCards.pop();
            const playerCard = playerCards.pop();
            if (compCard.rank > playerCard.rank) {
                compWins++;
            }
            if (compCard.rank < playerCard.rank) {
                playerWins++;
            }

            setCompCard(`${compCard.value}, ${compCard.suit}`)
            setPlayerCard(`${playerCard.value}, ${playerCard.suit}`)

        } else {
            dispatch(changePageAction('Result'))
            dispatch(setCompWinsAction(compWins))
            dispatch(setPlayerWinsAction(playerWins))
            compWins = 0
            playerWins = 0
        }
    }

    useEffect(() =>
    {
        const deck = [];
        const suits = ['♡', '♣', '♢', '♠'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 2; j <= 14; j++) {
                let v = j;
                if (j === 11)
                    v = 'J'
                if (j === 12)
                    v = 'Q'
                if (j === 13)
                    v = 'K'
                if (j === 14)
                    v = 'A'
                deck.push({suit: suits[i], rank: j, value: v})
            }
        }
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        compCards = deck.slice(0, deck.length / 2);
        playerCards = deck.slice(deck.length / 2, deck.length);
        handleClickNext();
    }, [])


        return (
            <div>
                <h1 className={'players computer'}>Computer</h1>
                <h2 className={'playerDeck'}>{compCard}</h2>
                <h2 className={'playerDeck'}>{playerCard}</h2>
                <h1 className={'players you'}>{name}</h1>
                <button className={'ingameButton'} onClick={handleClickNext}>Next</button>
            </div>
        );

}

export default Game;