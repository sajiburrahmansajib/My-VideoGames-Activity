import React from 'react';
import './Game.css'

const Game = (props) => {
    const { name, about, picture, time, age } = props.game
    return (
        <div className='game-info'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{about}</p>
            <p>{age}</p>
            <p>{time}</p>
            <div className='btn-add'>
                <button>Add To Activity</button>
            </div>


        </div>
    );
};

export default Game;