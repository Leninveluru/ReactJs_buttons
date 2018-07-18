import React, { Component } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

class StoreLocator extends Component {

	constructor(props){
		super(props);
		this.state = {
			'currentNumber': 'one.png'
		};
		this.shops = [{
			'location': 'one',
			'address': '123 one dr'
		},
		{
			'location': 'two',
			'address': '123 two dr'
		},
		{
			'location': 'three',
			'address': '123 three dr'
		}
		];

		this.chooseMap = this.chooseMap.bind(this);
	}

	chooseMap(e){
		let locationName =  e.target.value;
		if(!locationName){
			locationName = "one";
		}
		let imageName  = locationName + ".png";
		this.setState({currentNumber: imageName})
	}

  render() {

  	let shopButtons = this.shops.map((shop, id)=>{
  		return(<Button handleClick={this.chooseMap} key={id} location={shop.location} />)
  	})

    return (
    	<div>
    		<Header />
    		<div>
    			{shopButtons}
    		</div>
    		<Map imagename={this.state.currentNumber} location={this.props.location} />
    	</div>
    	);
  }
}

export default StoreLocator;
