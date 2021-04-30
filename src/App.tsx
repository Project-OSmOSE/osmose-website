import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Project } from './pages/Project';
import { Explore } from './pages/Explore';
import { People } from './pages/People';
import { Ontology } from './pages/Ontology';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/ontology">
            <Ontology />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
