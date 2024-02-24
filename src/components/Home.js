import React, { useState, useEffect } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import "../App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {

  const headers = ["BackEnd Developer", "FrontEnd Developer", "FullStack Developer"];
  const [index, setIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let textIndex = 0;
    const intervalId = setInterval(() => {
      if (textIndex <= headers[index].length) {
        setTypedText(headers[index].substring(0, textIndex));
        textIndex++;
      } else {
        setShowCursor(false);
        clearInterval(intervalId);
        setTimeout(() => {
          setShowCursor(true);
          setIndex((prevIndex) => (prevIndex + 1) % headers.length);
          setTypedText('');
        }, 1500); // Wait for 1.5 seconds before moving to the next header
      }
    }, 100); // Typing speed, adjust as needed

    return () => clearInterval(intervalId);
  }, [index]);



  return (
    <>
      <div className="home-container">
        <div className='home-image'/>
      </div>
      <div className='home-body'>
        <div className='home-Welcoming'>
          <h4> Welcome All In My Portfolio</h4>
        </div>
        <div className='home-cursor'>
          <h2>
              Hi! I'm Omar Khaled Ayad,<br />
              {typedText}
              {showCursor && '|'}
          </h2>
        </div>
        <p>Hello Everyone, I have 2 years of Experience in Web Development.</p>
        <Link>Let' Connect <FontAwesomeIcon icon={faArrowAltCircleRight}/></Link>
      </div>
    </>
  );
}

export default Home;
