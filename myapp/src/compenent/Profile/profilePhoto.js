import React, { Component } from 'react';
import './profilePhoto.css';
import myProfileImage from "../images/IMG.jpg";
const ProfilePhoto = () => {
    return (
        <img src={myProfileImage} alt='myImage' />
    )
}
export default ProfilePhoto;