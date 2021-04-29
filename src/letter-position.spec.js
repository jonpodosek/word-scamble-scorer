import {
    anyLettersMatchByPosition, firstLetterMatches, twoConsecutiveLettersMatchByPosition
} from './letter-position'


describe('Letter Position Tests', () => {

    describe('anyLettersMatchByPosition Test', () => {
        const realWord = "APPLE"
        test('1 or more letter match by position returns truthy', () => {
            expect(anyLettersMatchByPosition('PAPLE', realWord)).toBeTruthy
            expect(anyLettersMatchByPosition('APELP', realWord)).toBeTruthy
            expect(anyLettersMatchByPosition('FRAME', realWord)).toBeTruthy

        }),
        test('no letters match by position returns falsey', () => {
            
            expect(anyLettersMatchByPosition('PALPE', realWord)).toBeFalsy
            expect(anyLettersMatchByPosition('GRAPE', realWord)).toBeFalsy

        })
    })

})