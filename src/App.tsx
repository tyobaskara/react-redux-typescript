import React from 'react';
import logo from './logo.svg';
import './App.scss';
import TodosList from './components/todos-list/todos-list.component';
import TodosListHooks from './components/todos-list-hooks/todos-list-hooks.component';
import ParentAndChild from './components/parent-and-child/parent-and-child.component';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to='/todoslist'>TodosList</Link>
          </li>
          <li>
            <Link to='/todoslisthooks'>TodosListHooks</Link>
          </li>
          <li>
            <Link to='/parentandchild'>ParentAndChild</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path='/'><Redirect to='/todoslist'/></Route>
        <Route exact path='/todoslist' component={TodosList}/>
        <Route exact path='/todoslisthooks' component={TodosListHooks}/>
        <Route exact path='/parentandchild' component={ParentAndChild}/>
      </Switch>
    </div>
  );
}

export default App;
