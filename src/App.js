import React from 'react';
import Header from './pages/Layout/Header/'
import GenerosScreen from './pages/Generos/'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const Home = () => {
  return(
    <div>
      <h1>Página HOME</h1>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/generos">
          <GenerosScreen />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
