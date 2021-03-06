import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
    <div style={styles.headerContainer}>
      <div style={styles.title}>
      Simple <span style={styles.displayColor}>React </span>
      App with <span style={styles.displayColor}>Button's </span>
      funtionality.
      </div>
    </div>
    );
  }
}

const styles = {
	headerContainer: {
	    background: '#333',
	    color: '#fff',
	    padding: '15px',
	    overflow: 'hidden',
	    textAlign: 'center',
	    marginBottom: '10px'
	},

	title: {
	    float: 'left',
	    fontWeight: 'bold',
	    fontSize: '18px',
	    textAlign: 'center'
	},

	displayColor: {
		color: 'orange'
	}
}

export default Header;
