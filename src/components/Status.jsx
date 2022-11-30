import React from 'react';

const Status = ({resident}) => {
    if(resident.status === "Alive"){
    return (
        <div className='status-green' >     
        </div>
    )}
    else if(resident.status === "Dead"){
    return (
        <div className='status-red' >     
        </div>
    )}
    else{
        return (
            <div className='status'>     
            </div>
        )}

    
};

export default Status;