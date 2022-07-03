import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import './home.css';

function home() {
  return (
    < section className='section1'>
      <div class="bgimage" id="home">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
              <h2 class="hero_title">Hi, it's me Dhahri Najwa</h2>
              <p class="hero_desc">I am a full stack in tunisia City</p>
            </div>
          </div>
        </div>

      </div>
      <div className='contact1'>
        <a href="#https://mail.google.com/mail/u/0/" target="_blank">dhahrinajwa1995@gmail.com</a>
        <a href='https://github.com/Najwa1995' target="_blank">github:Najwa1995</a>
        <a href='https://www.linkedin.com/in/dhahri-najwa-83444b189/' target="_blank">linkedin:ndhahri najwa</a>
        <a href='#' target="_blank">95146***</a>
      </div>


    </section>

  );
};

export default home;