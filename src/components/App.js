import React, {Component} from 'react';
import {NavTop, Coffee, TopChoice} from './index';
import BodyWrapper from './Common/BodyWrapper/BodyWrapper';
import {Exclusives, Espresso, Lungo, Mastercrafted, Decaffe, Flavored} from './shared/index';
import coffeePic from './shared/image/public/coffee-cup.png';

class App extends Component{
    render() {
        return(
        <BodyWrapper>
                <NavTop pic={coffeePic} />
                    <div className='wrap'>
                        <TopChoice />
                        <Coffee espresso={Espresso} decaffe={Decaffe} exclusives={Exclusives}
                            lungo={Lungo} masterCrafted={Mastercrafted} flavored={Flavored}/>
                    </div>
                    {/* <CoffeeDiary/> */}
        </BodyWrapper>
        )
    }
}

export default App;

