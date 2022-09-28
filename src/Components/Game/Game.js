import React from 'react';
import './Game.css'

const Game = (props) => {
    const { name, about, picture, time, age } = props.game
    return (
        <div className='game-info'>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{about}</p>
                <p>{age}</p>
                <p>{time}</p>
            </div>
            <button>Add To Activity</button>



        </div>
    );
};

export default Game;