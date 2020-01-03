// import React, {Component} from 'react';
// import BodyWrapper from './Common/BodyWrapper/BodyWrapper';
// import {Login} from './index';
// class App extends Component{
//     render() {
//         return(
//         <BodyWrapper>
//             <Login/>
//         </BodyWrapper>
//         )
//     }
// }

// export default App;
import React, {Component} from 'react';
import {NavTop, Coffee, TopChoice, CoffeeDiary, CoffeeOrder} from './index';
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
        </BodyWrapper>
        )
    }
}

export default App;

