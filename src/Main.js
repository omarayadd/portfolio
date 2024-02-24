// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Home from './components/Home';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Connect from './components/Connect';
// import End from './components/End';

// const Main = () => {
//   return (
//     <>
//       <Outlet />
//       <Home />
//       <Skills />
//       <Projects />
//       <Connect />
//       <End />
//     </>
//   );
// };

// export default Main;



// Main.js

// Main.js

// Main.js

// Main.js

import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Connect from './components/Connect';
import End from './components/End';

const Main = () => {
  const { selected } = useParams();

  // Render the selected component above others
  const renderSelectedComponent = () => {
    switch (selected) {
      case 'home':
        return (
            <>
                <Home/>
                <Skills />
                <Projects />
            </>
        );
      case 'skills':
        return (
          <>
            <Skills />
            <Projects />
          </>
        );
      case 'projects':
        return <Projects />;
      default:
        return (
            <>
                <Home/>
                <Skills />
                <Projects />
            </>
        );
    }
  };

  return (
    <>
      {renderSelectedComponent()}
      <Outlet />
      <Connect />
      <End />
    </>
  );
};

export default Main;



