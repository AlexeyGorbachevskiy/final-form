import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import {Section} from './components/Section';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <div className='App'>
        <Navbar />
        <Switch>
            <Route path='/section1' exact>
                <Section />
            </Route>
            <Route path='/section2' exact>
                <Section />
            </Route>
            <Route path='/section3' exact>
                <Section />
            </Route>
            <Route exact path='/' render={() => <Redirect to={'/section1'}/>}/>
        </Switch>
    </div>
  );
}

export default App;
