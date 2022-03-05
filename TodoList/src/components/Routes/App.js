import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from '../../pages/Main';
import ExerciseContainer from '../../pages/ExerciseContainer';
import NotFound from '../../pages/NotFFound';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact strict path="/" component={Main}></Route>
            <Route exact strict path="/main" component={Main}></Route>
            <Route exact strict path="/main/ExerciseContainer" component={ExerciseContainer}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>

)
export default App