import logo from './dudelogo.jpg';
import './App.css';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PaidIcon from '@mui/icons-material/Paid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="links" href="https://account.venmo.com/u/nolan_smith" ><PaidIcon />VENMO</a>
        <a className="links" href="https://www.facebook.com/profile.php?id=100084473899055"><FacebookOutlinedIcon />FACEBOOK</a>
        <a className="links" href="https://www.instagram.com/cowabungadudekc/"><InstagramIcon />INSTAGRAM</a>
      </header>
    </div>
  );
}

export default App;
