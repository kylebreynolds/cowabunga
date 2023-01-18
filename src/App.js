import logo from './dudelogo.jpg';
import venmo from './venmoicon.png';
import facebook from './facebookicon.png';
import instagram from './instaicon.png';
import './App.css';


import Grid from '@mui/material/Grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <a className="links" href="https://account.venmo.com/u/nolan_smith" >
            <img
          className="venmo"
          alt="venmo"
          src={venmo}
        />
        </a>
          </Grid>  
          <Grid item xs={6}>
          <a className="links" href="https://www.facebook.com/profile.php?id=100084473899055"><img
          className="social"
          alt="facebook"
          src={facebook}
        /></a>
          </Grid>
          <Grid item xs={6}>
          <a className="links" href="https://www.instagram.com/cowabungadudekc/"><img
          className="social"
          alt="instagram"
          src={instagram}
        /></a>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
