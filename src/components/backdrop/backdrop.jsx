import React from 'react';
import Car from '../car/car';
import Score from '../score/score';
import './backdrop.css';
import Skyline from './skyline/skyline';


const Backdrop = () => {
    return ( 
    <div>
        <div className="backdrop-grass"> 
        <div className="road">
        <Car />
        <div className="roadlines" />
        </div>
        </div>
        <div className="backdrop-sky">
            <Score />
            <Skyline />
        </div>
    </div>
    );
}

export default Backdrop;