import React, { useState } from 'react';
import './Cart.css'
import pf from './ND8_0203-1-removebg-preview.png'

const Cart = (props) => {
    // console.log(props.time)
    const [breakTime, setBreakTime] = useState(0)
    const handleBreakTime = (time) => {
        setBreakTime(time)
    }

    return (
        <div className='cart'>
            <div className='user-info'>
                <div>
                    <img src={pf} alt="" />
                </div>
                <div>
                    <h2>MD.Sajibur Rahman</h2>
                    <p>Hello, i am Sajib and i love playing games ....</p>
                </div>
                <div>
                    <div className='user-self'>
                        <div className='personal'>
                            <h4>90<small>kg</small></h4>
                            <h4 className='measurement'>Weight</h4>
                        </div>
                        <div className='personal'>
                            <h4>6.0 </h4>
                            <h4 className='measurement'>Hight</h4>
                        </div>
                        <div className='personal'>
                            <h4>25<small>yrs</small></h4>
                            <h4 className='measurement'>Age</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Add A Break</h2>
                    <div id='break-time' className='time-container'>
                        <span onClick={() => handleBreakTime(10)} className='time'>10m</span>
                        <span onClick={() => handleBreakTime(20)} className='time'>20m</span>
                        <span onClick={() => handleBreakTime(30)} className='time'>30m</span>
                        <span onClick={() => handleBreakTime(40)} className='time'>40m</span>
                        <span onClick={() => handleBreakTime(50)} className='time'>50m</span>
                    </div>
                </div>
                <div className='Exercise'>
                    <h2>Exercise Details</h2>
                    <div className='Exercise-time'>
                        <h4>Exercise Time</h4>
                        <h4>{props.time} minute</h4>
                    </div>
                    <div className='break'>
                        <h4>Break Time</h4>
                        <h4>{breakTime} minute</h4>
                    </div>
                </div>
            </div>
            <button className='btn-activity'>Activity Completed</button>

        </div>
    );
};

export default Cart;