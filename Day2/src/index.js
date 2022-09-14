import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';

const Root = () => {
   return (
    <div>
        <BrowserRouter>
          <div>
            <Route exact path="/">
              <App />
            </Route>

            <Route exact path="/users">
              <Users />
            </Route>

            <Route path="/users/:userId">
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
