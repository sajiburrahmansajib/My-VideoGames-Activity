import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';
import './Home.css'

const Home = () => {
    const [games, setGames] = useState([])
    const [time, setTime] = useState('')

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])
    const handleAddToGame = (selectedGame) => {
        let timeCount = 0;
        const game = games.find(game => game.id === selectedGame)
        timeCount = timeCount + game.time
        setTime(timeCount)
    }

    return (
        <div className='main-container'>
            <div className="game-container">
                {
                    games.map(game => <Game key={game.id} game={game} handleAddToGame={handleAddToGame}></Game>)
                }
            </div>
            <div className="cart-container">
                <Cart time={time}></Cart>
            </div>
        </div>
    );
};

export default Home;