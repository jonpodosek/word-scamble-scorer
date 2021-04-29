import calculateClassification, { sanitizeInput } from './word-classification'

describe('Word Classification Tests', () => {
  describe('Scambled word returns the expected classification', () => {
    test('Scamble MAPS of SPAM is fair', () => {
      const actual = calculateClassification('MAPS', 'SPAM')
      expect(actual).toEqual('MAPS is a fair scramble of SPAM')
    })
    test('Scamble RIONY of IRONY is fair', () => {
      const actual = calculateClassification('RIONY', 'IRONY')
      expect(actual).toEqual('RIONY is a fair scramble of IRONY')
    })
    test('Scamble ONYRI of IRONY is hard', () => {
      const actual = calculateClassification('ONYRI', 'IRONY')
      expect(actual).toEqual('ONYRI is a hard scramble of IRONY')
    })

    test('Scamble IRONY of IRONY is not a scramble', () => {
      const actual = calculateClassification('IRONY', 'IRONY')
      expect(actual).toEqual('IRONY is not a scramble of IRONY')
    })

    test('Scamble INOYR of IRONY is fair', () => {
      const actual = calculateClassification('INOYR', 'IRONY')
      expect(actual).toEqual('INOYR is a fair scramble of IRONY')
    })

    test('Scamble IOYRN of IRONY is poor', () => {
      const actual = calculateClassification('IOYRN', 'IRONY')
      expect(actual).toEqual('IOYRN is a poor scramble of IRONY')
    })

    test('Two letter word', () => {
      const actual = calculateClassification('OT', 'TO')
      expect(actual).toEqual('OT is a fair scramble of TO')
    })

    test('One letter word', () => {
      const actual = calculateClassification('A', 'A')
      expect(actual).toEqual('A is not a scramble of A')
    })
  })

  describe('Sanitize Input Tests', () => {
    test('Sanitize Input trims white space', () => {
      const actual = sanitizeInput(' MAPS ')
      expect(actual).toEqual('MAPS')
    })
    test('Sanitize Input converts all chars to uppercase', () => {
      const actual = sanitizeInput('maps')
      expect(actual).toEqual('MAPS')
    })
    test('Falsey value word throws error', () => {
      expect(() => {
        sanitizeInput(undefined)
      }).toThrow(/Please provide a word with a length of 1 or more characters/)
    })
  })
})
