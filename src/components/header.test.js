import React from 'react';
import header from './header';

describe('Header Component', () => {
    const headerTest = header();
    it('returns the header', () => {
        expect(headerTest).toEqual(<h1>League of Leagues</h1>)
    })
})