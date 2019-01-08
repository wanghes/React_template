import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import "./scss/main.scss";

import Header from './components/head';
import Home from './views/Home';
import Book from './views/Book';
import User from './views/User';


const App = props => (
    <HashRouter>
        <div>
            <Header />  
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/book" component={ Book } />
                <Route path="/user" component={ User } />
                <Redirect to="/" />
            </Switch>
        </div>
    </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
