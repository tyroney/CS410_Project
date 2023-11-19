import logo from './cornerlogo.png';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <header className="Header">
        <img src={logo} className="LiveDataLabLogo" alt="logo" />
        <p className='BodyText'>
          Your Projects
        </p>
      </header>
    </div>
  );
}

export default Projects;
