import React from 'react';
import Members from './members';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Members Component', () => {

    it('component', () => {
        const membersComponent = shallow(<Members />);
        expect(membersComponent).toMatchSnapshot();
    });
});