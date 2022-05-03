import React, { useState } from 'react';
import axios from 'axios';

const SingleLoot = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const displayNumber = () => {
        axios({
            method: 'get',
            url: 'http://localhost:4000/',
            responseType: 'json'
        })
            .then((response) => {
                setRandomNumber(response.data)
            });
    }

    return (
        <div>
            <button onClick={displayNumber}>Random number</button>
            <h1>{randomNumber}</h1>
        </div>
    )
}

export default SingleLoot;