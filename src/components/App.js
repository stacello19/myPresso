import React from 'react';
// TODO: router
// import { Switch, Route } from 'react-router-dom';
import Coffee from './Coffee/Coffee';
import TopChoice from './TopChoice/TopChoice';
import BodyWrapper from './Common/BodyWrapper/BodyWrapper';

const App = () => {
    return (
        // DID: fragrment
        <BodyWrapper>
            <TopChoice />
            <Coffee />
        </BodyWrapper>


    );
};

export default App;

// TODO: Router and Switch
// <Switch>
//     <Route exact path='/' component={ListPage}/>
// </Switch>
