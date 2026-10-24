import osuLogo from './assets/osuLogo.png';
import { Link } from 'react-router';

export default function Navbar() {
    return (
        <div id="navbar">
          <Link to="/" aria-label="Home"><img src={osuLogo} alt="OSU Roller Hockey Club" height="50px" /></Link>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
          <Link to="/team">Meet the Team</Link>
          <div id="dropdown">
              <button id="dropbtn">
                  Links <i className="fa fa-caret-down"></i>
              </button>
              <div id="dropdown-content">
                  <a href="https://www.mcrhl.com/" target="_blank" rel="noreferrer">MCRHL</a>
                  <a href="https://www.ncrha.org/" target="_blank" rel="noreferrer">NCRHA</a>
                  <a href="https://www.heatwavearena.com/" target="_blank" rel="noreferrer">Heatwave Arena</a>
              </div>
          </div>
      </div>
    );
}