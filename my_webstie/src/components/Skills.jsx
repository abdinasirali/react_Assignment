
import React from 'react';
import './css/skills.css'; 

const Skills = () => {
  return (
    

    <div>
    <div className="skills">
      
         
    <img 
      height={300}
      src="./public/java.png"
      alt=""
      style={{ marginRight: '100px' }} 
    /> 
    <img 
      height={300}
      src="./public/php.png"
      alt=""
      style={{ marginRight: '100px' }} 
    />   
     <img 
    height={300}
    src="./public/c.png"
    alt=""
    style={{ marginRight: '100px' }} 
  />  
    <img 
      height={300}
      src="./public/mysql.png"
      alt=""
    />

  </div>
  <div className="skills">
      
         
      <img 
        height={300}
        src="./public/javascript-icon.png"
        alt=""
        style={{ marginRight: '100px' }} 
      /> 
      <img 
        height={300}
        src="./public/oracle.png"
        alt=""
        style={{ marginRight: '100px' }} 
      />   
       <img 
      height={300}
      src="./public/css.png"
      alt=""
      style={{ marginRight: '100px' }} 
    />  
      <img 
        height={300}
        src="./public/pyhton.png"
        alt=""
      />
  
    </div>
  <footer className='foot' ><h1>projects</h1></footer>
  </div>
  );
};

export default Skills;
