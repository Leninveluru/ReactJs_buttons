import React from 'react';
import {shallow} from 'enzyme';
import Map from '../Map';

it('renders without crashing', () => {
  let mountedButton = shallow(<Map />);
});
