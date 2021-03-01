import React from 'react';
import CreateTeam from './createTeam';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateTeam Component', () => {

    it('component', () => {
        const createTeamComponent = shallow(<CreateTeam />);
        expect(createTeamComponent).toMatchSnapshot();
    });
});