import React, { Component } from 'react';
import './Adresse.css';
const Adresse = () => {
    let firstName = "Monastir-rend point Nafoura";
    let lastName = "Rue c100e"
    return (
        <div>
            
            <h1 >{firstName + " " + lastName}</h1>
        </div>
    )
}
export default Adresse;