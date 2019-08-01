import React, {Component} from 'react';
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

class App extends Component{
    constructor(props) {
        super(props)
        this.state={
            diaryInfo:[
                {rating: 5, comment: 'It was so delicious! Best coffee ever!', name: 'My Coffee', image:`${coffeePic}`},
                {rating: 3, comment: 'It needs little bit more dark taste... not bad.', name: 'My Coffee', image:`${coffeePic}`},
                {rating: 4, comment: 'If you want to awake, this is the coffee you should try! So strong.. Be aware..', name: 'My Coffee', image:`${coffeePic}`}  
                ],
            order:[
                {orderNum: 5, name: 'Latte', price: '0.70'},
                {orderNum: 2, name: 'Ice Coffee', price: '1.50'}
            ]
        }
    }
    componentDidMount() {
        console.log('component did mount!')
    }
    componentDidUpdate() {
        console.log('component did update!!!')
        console.log(this.state);
    }
    render() {
        const {diaryInfo, order} = this.state;
        const myCallback = (rating, comment, name, image) => {
                const coffeeInfo={
                    rating: rating,
                    comment: comment,
                    name: name,
                    image: image
                }
                this.setState({
                    diaryInfo: [...diaryInfo, coffeeInfo]
                  })
        }

        const orderCallback = (orderNum, name, price) => {
            const orderInfo={
                orderNum: orderNum,
                name: name,
                price: price
            }
            this.setState({
                order: [...order, orderInfo]
            })
        }
        return(
        <BodyWrapper>
                <NavTop pic={coffeePic} />
                    <TopChoice />
                    <Coffee espresso={Espresso} decaffe={Decaffe} exclusives={Exclusives}
                            lungo={Lungo} masterCrafted={Mastercrafted} flavored={Flavored}
                            dataFromChild={myCallback} orderDataFromChild={orderCallback}/>
                    <CoffeeDiary diaryInfo={diaryInfo}/>
                    <CoffeeOrder orderInfo={order}/>
        </BodyWrapper>
        )
    }
}

export default App;

// TODO: Router and Switch
// <Switch>
//     <Route exact path='/' component={ListPage}/>
// </Switch>
