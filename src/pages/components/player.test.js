import React from 'react';
import Player from './player';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Player Component', () => {
    const props = {
        players: {
            userid: 56,
            leaguename: 'ComponentTest',
            preferedrole: 'jungle',
            secondaryrole: 'adc',
            team: 'CTT'
        }
    }
    it('component', () => {
        const playerComponent = shallow(<Player {...props} />);
        expect(playerComponent).toMatchSnapshot();
    });
});