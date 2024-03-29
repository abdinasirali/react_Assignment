

import React from 'react';
import './css/projects.css';

const Projects = () => {
  return (
    <div>
    <div className="projects">
   
      <div className="project">
        <h3>Project 1</h3>
        <p className='par'>Project: Personal Portfolio Website
<pr>Objective: Create a personal portfolio website using React. This website will consist of several
components to showcase the student's bio, skills, projects, and contact information. It's a
practical assignment that can result in a product they might actually use, and it reinforces the
fundamentals of React components and CSS styling.</pr><br/>
<pr>Requirements:<br/>
Homepage Component: This should be a welcoming page with a brief introduction of the
student. Encourage creativity in how they present their name and what they are passionate
about (e.g., "Hello, I'm [Name]. A budding software developer passionate about web
technologies.").</pr><br/>
<pr>Bio Component:<br/> This component should contain a short biography of the student. They can
talk about their background, education, interests, and what got them into coding.
Skills Component: In this section, students should list the programming languages and tools
they are familiar with. Encourage them to use icons or images to represent each skill for a more
visually appealing presentation.</pr><br/>
<pr>Projects Component:<br/> Here, students can showcase any previous projects they have worked
on (these can be hypothetical if they don't have any real projects yet). They should include a
title, a brief description, and ideally, an image of the project. Since they might not have dynamic
content management skills yet, static representations will do.</pr><br/>
<pr>Contact Component: <br/>This should include their contact information or a form where visitors can
send a message. For simplicity, just displaying their email address and LinkedIn profile link is
enough at this stage.</pr><br/>
<pr>Guidelines:<br/>
Each component should be styled to provide a cohesive look and feel across the website. They
can use CSS or any CSS-in-JS library they are comfortable with.
Encourage the use of proper semantic HTML within their React components for accessibility.
While the focus is on components and styling, if they are ready for a challenge, they can look
into simple navigation between pages using React Router, but this should be considered extra
credit.</pr><br/>
<pr>Deliverables:<br/>
Source code uploaded to a GitHub repository.
A README file that includes an overview of the project, how to run it locally, and any challenges
they faced plus how they overcame them.</pr><br/></p>
       
      </div>
    
    </div>
    <footer className='foot' ><h1>Contacts</h1></footer>

    </div>
  );
};

export default Projects;
