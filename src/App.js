import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './containers/Home';
import Search from './containers/Search';
function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/search/:search">
              <Search />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
