import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';
import './Home.css'

const Home = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setGames(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="game-container">
                {
                    games.map(game => <Game key={game.id} game={game}></Game>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;