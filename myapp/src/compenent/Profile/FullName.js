import React, { Component } from 'react';
import './FullName.css';
const FullName = () => {

    let firstName = "Dhahri";
    let lastName = "Najwa"
    return (
        <div className='full'>
            <h1>{firstName + " " + lastName}</h1>
        </div>
    )

}
export default FullName;