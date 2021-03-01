import React from 'react';
import Team from './team';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Team Component', () => {
    const props = {
        allTeams: {
            teamname: 'Component Test',
            teamabr: 'CTT',
            captainid: 56,
            captain: 'D1',
            topid: 55,
            top: 'D0',
            jungleid: 56,
            jungle: 'D1',
            midid: 57,
            mid: 'D2',
            adcid: 58,
            adc: 'D3',
            supportid: 59,
            support: 'D4'
        },
        userStatus: true,
    }
    it('component', () => {
        const teamComponent = shallow(<Team {...props} />);
        expect(teamComponent).toMatchSnapshot();
    });
});