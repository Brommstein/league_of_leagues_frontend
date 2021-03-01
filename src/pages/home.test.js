import React from 'react';
import Home from './home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Home Component', () => {

    it('component', () => {
        const homeComponent = shallow(<Home />);
        expect(homeComponent).toMatchSnapshot();
    });
});