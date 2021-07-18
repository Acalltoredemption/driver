import React from 'react'
import './city.css'
import Citypic from '../../../../images/city.png'
import Townpic from '../../../../images/town.png'

export default function City() {
    return (
        <div className="cityholder">
            <img src={Citypic} className="citypic" alt="" />
            <img src={Townpic} alt="" className="townpic" />
        </div>
    ) 
}
