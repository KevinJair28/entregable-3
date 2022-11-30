import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Character from './Character';

const RickandMorty = () => {
    const [location, setLocation] = useState({});
    const [locationId, setLocationId] = useState("");

    useEffect(()=>{
        const randomId = Math.floor(Math.random()*126)+1;
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
        .then(res => setLocation(res.data))
    },[])

    console.log(location)

    const searchId = () =>{
        axios.get(`https://rickandmortyapi.com/api/location/${locationId}`)
        .then(res => setLocation(res.data))
    }
    return (
        <div className='App'>
            <div className='information'>
                <h2>{location.name}</h2>
                <div className='iten'>
                    <p><b>Type: </b>{location.type}</p>
                    <p><b>Dimension: </b>{location.dimension}</p>
                    <p><b>Population: </b>{location.residents?.length}</p>
                </div>
            </div>
            <div className='search-input'>
                <input type="text" value={locationId} onChange={e => setLocationId(e.target.value)} />
                <button onClick={searchId}>Search</button>
            </div>
            <div className='list'>
                {
                    location.residents?.map(link => (
                        <Character key={link} link={link}/>
                    ))
                }
            </div>
        </div>
    );
};

export default RickandMorty;