import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Stockwishlist from './components/Stockwishlist';
import Stocklist from './components/Stocklist';
import Updatestock from './components/Updatestock';
import Hearder from './components/Hearder';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';





function App() {
  return (
    <div>
      <Router>
        <Hearder />
        <div className="container">
          <Switch> 
            <Route path="/" exact component={Stockwishlist} />
            <Route path="/stocks" component={Stockwishlist} />
            <Route path="/stocklist" component={Stocklist} />
            <Route path="/updatestock/:id" component={Updatestock} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
