import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb, getStoredData } from '../../utilities/fakedb';
import './Cart.css'
import pf from './ND8_0203-1-removebg-preview.png'

const Cart = (props) => {

    const notify = () => toast.success('Yeeee ! You Done All Your Activity', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;
    // console.log(props.time)
    const [breakTime, setBreakTime] = useState(0)
    const handleBreakTime = (time) => {
        setBreakTime(time)
        addToDb(time)
    }
    useEffect(() => {
        const storedTime = getStoredData();
        setBreakTime(storedTime)
    }, [])

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
                        <button className='time' id='btn-10'>
                            <span onClick={() => handleBreakTime(10)}>10m</span>
                        </button>
                        <button className='time' id='btn-20'>
                            <span onClick={() => handleBreakTime(20)}>20m</span>
                        </button>
                        <button className='time' id='btn-30'>
                            <span onClick={() => handleBreakTime(30)}>30m</span>
                        </button>
                        <button className='time' id='btn-40'>
                            <span onClick={() => handleBreakTime(40)}>40m</span>
                        </button>
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
            <button onClick={notify} className='btn-activity'>Activity Completed</button>
            <ToastContainer />

        </div>
    );
};

export default Cart;