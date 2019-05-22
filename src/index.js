import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
/* import { BrowserRouter, Route, Switch } from 'react-router-dom'; */
import { Router, browserHistory } from 'react-router';
import routes from './routes';

/* import MainPage from './components/MainPage';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost'; */

import ReduxPromise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory} routes={routes} />
        {/*  <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/post/new" component={NewPost} />
                    <Route path="/post/:id" component={ViewPost} />
                    <Route path="/" component={MainPage} />
                </Switch>
            </div>
        </BrowserRouter> */}
    </Provider>,
    document.querySelector('.container')
);
