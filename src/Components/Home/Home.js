import React, { useEffect, useState } from 'react';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';
import './Home.css'

const Home = () => {
    const [games, setGames] = useState([])
    const [time, setTime] = useState(0)
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    useEffect(() => {
        const storedTime = getStoredData();
        setBreakTime(storedTime)
    }, [games])
    const handleBreakTime = (time) => {
        setBreakTime(time)
        addToDb(time)
    }

    const handleAddToGame = (selectedGame) => {
        let newTime = 0
        let gameSelected = [];
        const game = games.find(game => game.id === selectedGame)
        gameSelected.push(game)
        for (const game of gameSelected) {
            newTime = time + game.time;
            // setTime(timeCount)
        }
        // console.log(newTime)
        setTime(newTime)

    }

    return (
        <div className='main-container'>
            <div className="game-container">
                {
                    games.map(game => <Game key={game.id} game={game} handleAddToGame={handleAddToGame}></Game>)
                }
            </div>
            <div className="cart-container">
                <Cart time={time} breakTime={breakTime} handleBreakTime={handleBreakTime}></Cart>
            </div>
        </div>
    );
};

export default Home;