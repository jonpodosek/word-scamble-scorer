import { anyLettersMatchByPosition, firstLetterMatches, twoConsecutiveLettersMatchByPosition } from './letter-position'

describe('Letter Position Tests', () => {
  describe('anyLettersMatchByPosition Tests', () => {
    const realWord = 'APPLE'
    test('1 or more letter match by position returns true', () => {
      expect(anyLettersMatchByPosition('PAPLE', realWord)).toBe(true)
      expect(anyLettersMatchByPosition('APELP', realWord)).toBe(true)
    }),
      test('no letters match by position returns false', () => {
        expect(anyLettersMatchByPosition('PALEP', realWord)).toBe(false)
        expect(anyLettersMatchByPosition('LEAPP', realWord)).toBe(false)
      })
  })

  describe('firstLetterMatches Tests', () => {
    const realWord = 'APPLE'
    test('first letter match returns true', () => {
      expect(firstLetterMatches('APELP', realWord)).toBe(true)
    }),
      test('first letter mismatch returns true', () => {
        expect(firstLetterMatches('PALEP', realWord)).toBe(false)
      })
  })

  describe('twoConsecutiveLettersMatchByPosition Tests', () => {
    const realWord = 'APPLE'
    test('two consecutive letters match returns true', () => {
      expect(twoConsecutiveLettersMatchByPosition('APPLE', realWord)).toBe(true)
      expect(twoConsecutiveLettersMatchByPosition('APLEP', realWord)).toBe(true)
      expect(twoConsecutiveLettersMatchByPosition('EPPLA', realWord)).toBe(true)
    }),
      test('no consecutive letters match returns false', () => {
        expect(twoConsecutiveLettersMatchByPosition('EPLPA', realWord)).toBe(false)
        expect(twoConsecutiveLettersMatchByPosition('ALPEP', realWord)).toBe(false)
      })
  })
})
