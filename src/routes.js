import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.js';
import MainPage from './components/MainPage';
import NewPost from './components/NewPost';
import ViewPost from './components/ViewPost';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MainPage} />
        <Route path="/post/new" component={NewPost} />
        <Route path="/post/:id" component={ViewPost} />
    </Route>
);
