import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Game.css'

const Game = (props) => {
    const { id, name, about, picture, time, age } = props.game
    const { handleAddToGame } = props
    return (
        <div className='game-info'>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>
                <p>{about}</p>
                <p>For Age : {age}</p>
                <p>Time Required : {time}</p>
            </div>
            <button onClick={() => handleAddToGame(id)}>
                <p>Add To Activity</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Game;