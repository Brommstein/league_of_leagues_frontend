import React from 'react';
import Option from './option';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Option Component', () => {
    const props = {
        allUsers: {
            userid: 56,
            leaguename: 'ComponentTest'
        }
    }
    it('component', () => {
        const optionComponent = shallow(<Option {...props} />);
        expect(optionComponent).toMatchSnapshot();
    });
});