import React from 'react';
import footer from './footer';

describe('Footer Component', () => {
    const footerTest = footer();
    it('returns the footer', () => {
        expect(footerTest).toEqual(<p>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. League of Leagues is not affiliated with Riot Games.</p>)
    })
})