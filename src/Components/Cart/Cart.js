import React from 'react';
import './Cart.css'
import pf from './ND8_0203-1-removebg-preview.png'

const Cart = () => {
    return (
        <div className='cart'>
            <div className='user-info'>
                <div>
                    <img src={pf} alt="" />
                </div>
                <div>
                    <h2>MD.Sajibur Rahman</h2>
                    <p>Hello, i am sajib and i love playing games ....</p>
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
                    <div className='time-container'>
                        <span className='time'>10m</span>
                        <span className='time'>20m</span>
                        <span className='time'>30m</span>
                        <span className='time'>40m</span>
                        <span className='time'>50m</span>
                    </div>
                </div>
                <div className='Exercise'>
                    <h2>Exercise Details</h2>
                    <div className='Exercise-time'>
                        <h4>Exercise Time</h4>
                        <h4>200m</h4>
                    </div>
                    <div className='break'>
                        <h4>Break Time</h4>
                        <h4>30m</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Cart;