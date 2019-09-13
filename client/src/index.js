import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/index'
import NewComponent from './components/newComponent'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer)

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  const Navbar = () =>
  <div>
    <NavLink to="/new" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
  </div>;

ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Navbar />
                <Route exact path="/" component={App}/>
                <Route exact path="/new" component={NewComponent}/>
            </Router>
        </Provider>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
