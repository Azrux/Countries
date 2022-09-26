import './App.css';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Components/Home';
import CountryDetail from './Components/Home/Components/CountryDetail';
import AddActivity from './Components/AddActivity/AddActivity';
import LandingPage from './Components/LandingPage/LandingPage';



function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LandingPage />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route exact path='/detail/:id' >
        <CountryDetail />
      </Route>
      <Route exact path="/activities" >
        <AddActivity />
      </Route>
    </div>
  )
}

export default App;
