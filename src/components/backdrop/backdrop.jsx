import React from 'react';
import Car from '../car/car';
import './backdrop.css';
import Skyline from './skyline/skyline';


const Backdrop = () => {
    return ( 
    <div>
        <div className="backdrop-grass"> 
        <div className="road">
        <Car />
        </div>
        </div>
        <div className="backdrop-sky">
            <Skyline />
        </div>
    </div>
    );
}

export default Backdrop;