import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';

const Root = () => {
  const handleClick = () => console.log('Tks for clicking');
   return (
    <div>
        <BrowserRouter>
          <div>
            <Link to="/"> App </Link>
            <Link to="/users"> Users </Link>
            <Link to="/users/1"> Adriana's Profile </Link>
            <Link to="/" onClick={handleClick}> App with click handler </Link>

            <Route exact path="/">
              <App />
            </Route>

            <Route exact path="/users">
              <Users />
            </Route>

            <Route exact path="/users/:userId">
              <Profile />
            </Route>
        
          </div>  
        </BrowserRouter>
    </div>
   )
};


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
