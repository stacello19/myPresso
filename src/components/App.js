import React from 'react';
// TODO: router
// import { Switch, Route } from 'react-router-dom';
import NavTop from './NavTop/NavTop';
import {Coffee} from './Coffee/Coffee';
import TopChoice from './TopChoice/TopChoice';
import CoffeeOrder from './CoffeeOrder/CoffeeOrder';
import CoffeeDiary from './CoffeeDiary/CoffeeDiary';
import BodyWrapper from './Common/BodyWrapper/BodyWrapper';
import Exclusives from './shared/exclusives';
import Espresso from './shared/espresso';
import Lungo from './shared/lungo';
import Mastercrafted from './shared/masterCrafted';
import Decaffe from './shared/decaffe';
import Flavored from './shared/flavored';
import coffeePic from './shared/image/public/coffee-cup.png';

const App = () => {
    return (
        // DID: fragrment
        <BodyWrapper>
                <NavTop pic={coffeePic} />
                    <TopChoice />
                    <Coffee espresso={Espresso} decaffe={Decaffe} exclusives={Exclusives}
                            lungo={Lungo} masterCrafted={Mastercrafted} flavored={Flavored}/>
                    <CoffeeDiary espresso={Espresso}/>
                    <CoffeeOrder />
        </BodyWrapper>


    );
};

export default App;

// TODO: Router and Switch
// <Switch>
//     <Route exact path='/' component={ListPage}/>
// </Switch>
