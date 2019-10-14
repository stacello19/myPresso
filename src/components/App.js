import React, {Component} from 'react';
import {NavTop, Coffee, TopChoice, CoffeeDiary, CoffeeOrder, Maps} from './index';
import BodyWrapper from './Common/BodyWrapper/BodyWrapper';
import {Exclusives, Espresso, Lungo, Mastercrafted, Decaffe, Flavored} from './shared/index';
import coffeePic from './shared/image/public/coffee-cup.png';

class App extends Component{
    render() {
        return(
        <BodyWrapper>
                <NavTop pic={coffeePic} />
                    <TopChoice />
                    <Coffee espresso={Espresso} decaffe={Decaffe} exclusives={Exclusives}
                            lungo={Lungo} masterCrafted={Mastercrafted} flavored={Flavored}/>
                    <CoffeeDiary/>
                    <CoffeeOrder/>
                    <Maps/>
        </BodyWrapper>
        )
    }
}

export default App;


