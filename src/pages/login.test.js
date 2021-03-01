import React from 'react';
import Login from './login';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Login Component', () => {

    it('component', () => {
        const loginComponent = shallow(<Login />);
        expect(loginComponent).toMatchSnapshot();
    });
});