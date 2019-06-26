import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './Coffee.scss';
import Nespresso1 from '../shared/image/nespresso1.png';
import Nespresso2 from '../shared/image/nespresso2.png';
import Nespresso3 from '../shared/image/nespresso3.png';
import Nespresso4 from '../shared/image/nespresso4.png';
import Nespresso5 from '../shared/image/nespresso5.png';
import Nespresso6 from '../shared/image/nespresso6.png';
import Nespresso7 from '../shared/image/nespresso7.png';
import Nespresso8 from '../shared/image/nespresso8.png';
import Nespresso9 from '../shared/image/nespresso9.png';

//const cx = classNames.bind(style);

//TODO: need to loop over the image later.

class Coffee extends Component {

  render() {
    // const importImg = (images) => {
    //   images.map(el => el.name);
    //   console.log(images)
    // }

    return (
      <div>
        <h1>Capsules</h1>
        <div> 
          <img src={Nespresso1} alt='nes1'/>
          <img src={Nespresso2} alt='nes2'/>
          <img src={Nespresso3} alt='nes3'/>
          <img src={Nespresso4} alt='nes4'/>
          <img src={Nespresso5} alt='nes5'/>
          <img src={Nespresso6} alt='nes6'/>
          <img src={Nespresso7} alt='nes7'/>
          <img src={Nespresso8} alt='nes8'/>
          <img src={Nespresso9} alt='nes9'/>
        </div>
      </div>
    )
  }
}

export default Coffee
