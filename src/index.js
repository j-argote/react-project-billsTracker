import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

import BaseLayout from './components/BaseLayout';
import App from './App';
import ExpenseTracker from './components/ExpenseTracker'
import BankLocations from './components/BankLocations';


// const store = createStore()

ReactDOM.render(
    // <Provider>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/expense-Tracker" component={ExpenseTracker} />
                    <Route path="/bank-locations" component={BankLocations} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    // </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
