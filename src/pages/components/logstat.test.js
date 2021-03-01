import React from 'react';
import Logstat from './logstat';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Logstat Component', () => {

    it('component', () => {
        const logStatComponent = shallow(<Logstat />);
        expect(logStatComponent).toMatchSnapshot();
    });
});