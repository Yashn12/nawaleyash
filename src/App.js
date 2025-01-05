import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact'
// import Project from './components/Project';
import Project from './components/Projects';


function App() {
  // reportWebVitals();
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <SocialIcons/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
      
  );
}

export default App;
