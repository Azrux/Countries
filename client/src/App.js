import './App.css';
import { Route } from 'react-router-dom'
import Home from './Components/Home/Components/Home';
import CountryDetail from './Components/Home/Components/CountryDetail';
import AddActivity from './Components/AddActivity/AddActivity';



function App() {
  return (
    <div className="App">
      <Route path='/home'>
        <Home />
      </Route>
      <Route exact path='/detail/:id' >
        <CountryDetail />
      </Route>
      <Route path="/activities" exact>
        <AddActivity />
      </Route>
    </div>
  )
}

export default App;
