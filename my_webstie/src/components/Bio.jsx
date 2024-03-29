

import React from 'react';
import './css/bio.css'; 
<style>

</style>
const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-content">
        <div className="bio-text">
          <h2 className="bio-heading">My Background</h2>
          <p className="bio-bio">
          <h1 > I'm a passionate software developer with a love for creating web applications.
            My journey began during my college days when I discovered the magic of coding.
            I'm a passionate software developer with a love for creating web applications.
        My journey began during my college days when I discovered the magic of coding.</h1> 
       
          </p>
        </div>
        <div className="bio-image">
          <img
            src="./Fb.png"
            alt="Profile"
          />
        </div>
      </div>
      <footer className='foot' ><h1>Skills</h1></footer>
    </div>
  );
};

export default Bio;
