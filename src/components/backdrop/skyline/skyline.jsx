import React from 'react';
import City from './city/city';
import './skyline.css';


const Skyline = () => {
    return ( 
        <div>
            <City />
            <div className="skyline-town" />
        </div>
     );
}
 
export default Skyline;