import React, { Component } from 'react';

import Apples from '../img/apples.jpeg';
import Bananas from '../img/bananas.jpg';
import Plums from '../img/plums.jpg';
import Blueberries from '../img/blueberries.jpg';
import Strawberries from '../img/strawberries.jpg';
import { CardImg } from 'reactstrap';




export default class FruitImg extends Component {
    state = {
        fruits: [
            { name: Strawberries },
            { name: Bananas },
            { name: Apples },
            { name: Plums },
            { name: Blueberries }
        ]
    }


    render() {

        return (
            <div>
                <CardImg src={this.props.picture} style={{ width: '180px', height: '180px' }} />
            </div>
        )
    }
}
