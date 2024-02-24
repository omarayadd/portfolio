import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const percentage = [85, 80, 75, 75, 80, 50];
  const fields = ["BackEnd Development", "FrontEnd Development", "Machine Learning", "Data Science", "Game Development", "Cyber Security"];
 
 const scrollRight = () =>{
  setCurrentIndex(currentIndex-1)
  if(currentIndex==0){
    setCurrentIndex(5)
  }
 } 
 const scrollLeft = () =>{
  setCurrentIndex(currentIndex+1)
} 
  return (
    <>
      <div className='skills-container'>
        <h2>Skills</h2>
        <p>You can see my skills here.</p>
        <div className='skills-body'>
          <div className='skills-circle'>
             <h3> {percentage[currentIndex%6]}%</h3>
             <p>{fields[currentIndex%6]}</p> 
          </div>
          <div className='skills-circle'>
              <h3> {percentage[(currentIndex+1)%6]}%</h3>
              <p>{fields[(currentIndex+1)%6]}</p>
          </div>
          <div className='skills-circle'>
              <h3> {percentage[(currentIndex+2)%6]}%</h3>
              <p>{fields[(currentIndex+2)%6]}</p>
          </div>
        </div>
        <a onClick={scrollRight} className='scrollRight'><FontAwesomeIcon icon={faChevronCircleRight} /></a>
        <a onClick={scrollLeft} className='scrollLeft'><FontAwesomeIcon icon={faChevronCircleLeft} /></a>
      </div>
    </>
  );
}

export default Skills;
