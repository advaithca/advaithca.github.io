import './App.css';
import { useState, useEffect } from "react";

import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import WorkEx from './components/WorkEx';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState({})
  const [projectData, setProjectData] = useState([])

  useEffect(()=>{
      fetch("https://api.github.com/users/advaithca")
          .then(res=>res.json())
          .then(newData=>setData(newData))

      fetch("https://api.github.com/users/advaithca/repos")
          .then(res2=>res2.json())
          .then(newData2=>setProjectData(newData2))
  },[])
  console.log(projectData)
  return (
    <div className="App scroll-smooth" id='Home'>
      <NavBar />
      <About
        bio={data.bio}
      />
      <Education/>
      <WorkEx />
      <Projects 
        contents={projectData}
      />
      <Footer />
    </div>
  );
}

export default App;
