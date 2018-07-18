import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';

it('renders without crashing', () => {
  let mountedButton = shallow(<Button />);
});

describe("when location is passed to it", ()=> {
	let mountedButton;
	let props;

	beforeEach(()=>{
		props = {
			location: "Location1"
		}
		mountedButton = shallow(<Button />);
	});

	it('displayes loactions',() => {
		const locName = mountedButton.find('.location-button');
		expect(locName.text()).toEqual('Location1');
	})
})
