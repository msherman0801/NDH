import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import { CheckIn, Disaster, Partner, Persons } from './containers/Exports'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import thunk from 'redux-thunk';
import './styles/index.css'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
        <Provider store={store}>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossorigin="anonymous"
            />
            <Router>
                <Route exact path="/" component={App}/>
                <Route exact path="/checkin" component={CheckIn}/>
                <Route exact path="/person" component={Persons}/>
                <Route exact path="/disaster" component={Disaster}/>
                <Route exact path="/partner" component={Partner}/>
            </Router>
        </Provider>,
        document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
