import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage'
import Information from './pages/ContactPage'
import About from './pages/GenderPage'
import Sidebar from './components/Sidebar'
import { HashRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Sidebar />
        <main className="container pt-15">
          <Switch>
            <Route path='/gender' component={About} />
            <Route path='/info' component={Information} />
            <Route path='/' component={HomePage} />
          </Switch>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
