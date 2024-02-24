// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './Main'
// import Home from './components/Home'
// import Header from './components/Header'
// import Skills from './components/Skills'
// import Projects from './components/Projects'


// function App() {
//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route path="/" element={<Main/>}>
//           <Route path="home" element={<Home/>}/>
//           <Route path="skills" element={<Skills/>}/>
//           <Route path="projects" element={<Projects/>}/>
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Home from './components/Home'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/:selected" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
