import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Status from './Status'

const Character = ({link}) => {
    const [resident, setResident] = useState({})

    useEffect(()=>{
        axios.get(link)
        .then(res => setResident(res.data))
    }, [])

    console.log(resident)
    return (
        <div className='resident-card'>
            <div className='card-img'>
                <img className='item-img' src={resident.image} alt="" />
                <div className='card-status'>
                    <Status resident={resident} link={link}/>
                    <p><b>Status: </b>{resident.status}</p>
                </div>
            </div>
            <div className='card-item'>
                <h1><b>{resident?.name}</b></h1>
                <p><b>Origin: </b></p>
                <p>{resident.origin?.name}</p>
                <p><b>Appearance in episodes: </b></p>
                <p>{resident.episode?.length}</p>
            </div>
        </div>
            
    );
};

export default Character;