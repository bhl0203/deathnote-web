import React from 'react';
import {
    BrowserRouter,
    Route,
    withRouter,
    Switch,
    Router,
} from 'react-router-dom';
import Main from './main';
import '../Styles/styles.scss';
export const EntryRoute = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} />
            {/* <Route path="/introduce" component={Introduce} />
            <Route path="/school" component={People} /> */}
        </Switch>
    </BrowserRouter>
);
