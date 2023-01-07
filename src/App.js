import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import Projects from './components/Projects';

import { details } from './details';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About name={details.About.name} picture={details.About.picture} purpose={details.About.tagline}/>
      <Education EdDetails={details.Education}/>
      <WorkExperience WorkDetails={details.WorkExperience}/>
      <Projects projectDeets={details.Projects}/>
      <Footer />
    </div>
  );
}

export default App;
