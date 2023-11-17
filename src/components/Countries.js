import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, country] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const continents = ['Afrique', 'Ameriques', 'Asie', 'Europe', 'Oceanie'];
    //const [salut] = useState("salut les amis");
    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then((res) => country(res.data));
    },[])
    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min='1' max='250' defaultValue={rangeValue}
                onChange={(e)=>setRangeValue(e.target.value)}/>
                {continents.map((element)=> (
                    <li>
                        <input type='radio' id={element}/>
                        <label htmlFor={element}>{element}</label>
                    </li>
                ))}
            </ul>
            <ul>
                {data
                .slice(0,rangeValue)
                .map((country, index) =>(
                <Card key={index} country={country}/>
                )) }
            </ul>
        </div>
    );
};

export default Countries;