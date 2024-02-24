import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';


function Projects() {
  const [activeComponent, setActiveComponent] = useState("FirstSection");

  const showComponent = (componentName) => {
    setActiveComponent(componentName);
  };

  const style1=(isActive)=>{
    return{
      backgroundColor:isActive?"gold":"white"
    }
  }
  
  return (
    <>
      <div className='projects-container'>
          <h2>My Projects</h2>
          <p>I am Omar Ayad, lives in Cairo, a passionate software engineer</p>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button style={style1(activeComponent === 'FirstSection')} type="button" className="firstbtn" onClick={()=>{showComponent('FirstSection')}}>1st Section</button>
          <button style={style1(activeComponent === 'SecondSection')} type="button" className="secondbtn" onClick={()=>{showComponent('SecondSection')}}>2nd Section</button>
          <button style={style1(activeComponent === 'ThirdSection')} type="button" className="thirdbtn" onClick={()=>{showComponent('ThirdSection')}}>3rd Section</button>

          </div>
          <div className='projects-sections'>
            {activeComponent === 'FirstSection' && <FirstSection />}
            {/* {activeComponent === 'SecondSection' && <SecondSection />} */}
            {activeComponent === 'ThirdSection' && <ThirdSection />}
          </div>
          <SecondSection/>
      </div>
    </>
  );
}

export default Projects;
