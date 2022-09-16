import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './index.css';
import App from './components/App';
import Users from './components/Users';
import Profile from './components/Profile';

const Root = () => {
  const handleClick = () => { console.log('Tks for clicking'); } 
  return(
    <BrowserRouter>
      <div>
        <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName="red" to ="/users"> Users </NavLink>
        <NavLink activeClassName="magenta" to="/hello"> Hello</NavLink>
        <NavLink activeClassName="green" to="/users/1"> Adriana's Profile </NavLink>
        <NavLink to="/" onClick={handleClick} exact> App with click handle </NavLink>
        <Switch>
          <Route exact path="/">
            <App />
          </Route> 

          <Route path="/hello">
            <h1>Hello</h1>
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route path="/users/:userId">
            <Profile />
          </Route>

          <Route>
            <h1>404: Page not found</h1>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
 )
};


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

