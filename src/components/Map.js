import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
  	let imagePath;
  	if(this.props.imagename){
  		imagePath = './images/'+ this.props.imagename;
  	}else{
  		imagePath = './images/one.png';
  	}
    return (
    	<div className="MapBox">
    		<img src={imagePath} alt="one number selected"/>
    	</div>
    	);
  }
}

export default Map;
