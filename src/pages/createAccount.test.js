import React from 'react';
import CreateAccount from './createAccount';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateAccount Component', () => {

    it('component', () => {
        const createAccountComponent = shallow(<CreateAccount />);
        expect(createAccountComponent).toMatchSnapshot();
    });
});