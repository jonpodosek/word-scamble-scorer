import looksReal, {
  isVowel,
  isConsonant,
  isValid2VowelCombo,
  isValid2ConsonantCombo,
  isValid3ConsonantCombo,
  getNumVowelsAndConsonants,
  isAlternatingVowelConsonants,
  containsDoubleConsonant,
} from './real-word'

/**
 * These constants should be kept in sync the application constants. But keeping a separately maintained list of the for testing,
 * we ensure changes to real constants are not blindly picked up by tests (e.g. someone accidentally removed a valid vowel).
 */
const currentValid2ConsonantCombos = [
  'BL',
  'BR',
  'CH',
  'CK',
  'CL',
  'CR',
  'DR',
  'FL',
  'FR',
  'GH',
  'GL',
  'GR',
  'KL',
  'KR',
  'KW',
  'PF',
  'PL',
  'PR',
  'SC',
  'SH',
  'SK',
  'SL',
  'SM',
  'SN',
  'SP',
  'SQ',
  'ST',
  'ST',
  'SW',
  'TH',
  'TW',
  'WH',
  'WR',
]

const currentValid3ConsonantCombos = ['SCH', 'SCR', 'SHR', 'THR']

const currentValid2VowelCombos = ['AI', 'AY', 'EA', 'EE', 'EO', 'IO', 'OA', 'OO', 'OY', 'YA', 'YO', 'YU']

const currentVowels = ['A', 'E', 'I', 'O', 'U', 'Y']

describe('Real Word Tests', () => {
  describe('looksReal Tests', () => {
    test('Real looking words', () => {
      expect(looksReal('ONYRI')).toBe(true)
      expect(looksReal('THRUGOH')).toBe(true) //valid 3 letter consonant
      expect(looksReal('SCRYPPA')).toBe(true) //valid 3 letter consonant
      expect(looksReal('LOOK')).toBe(true) //valid 2 letter vowel
      expect(looksReal('LEARETH')).toBe(true) //valid 2 letter vowel vowel & 2 letter consonant
    })
    test('Not real looking words', () => {
      expect(looksReal('SHRWDE')).toBe(false) //3 consonants in arrow
    })

    test('3 Consonants that are in valid list return true', () => {
      expect(looksReal('SCH')).toBe(true)
      expect(looksReal('SCR')).toBe(true)
      expect(looksReal('SHR')).toBe(true)
      expect(looksReal('THR')).toBe(true)
    })
    test('3 Consonants that are not in valid list return false', () => {
      expect(looksReal('SCC')).toBe(false)
      expect(looksReal('THH')).toBe(false)
      expect(looksReal('BCD')).toBe(false)
    })
    test('2 Consonant, 1 Vowel double consonant returns true', () => {
      expect(looksReal('BBA')).toBe(true)
      expect(looksReal('ABB')).toBe(true)
    })
    test('2 Consonant, 1 Vowel valid 2 consonant combo returns true', () => {
      expect(looksReal('KRO')).toBe(true)
      expect(looksReal('OKR')).toBe(true)
    })
    test('2 Consonant, 1 Vowel invalid 2 consonant combo returns false', () => {
      expect(looksReal('KSA')).toBe(false)
      expect(looksReal('AKS')).toBe(false)
    })
    test('2 Vowels, 1 Consonant alternating return true', () => {
      expect(looksReal('ICU')).toBe(true)
      expect(looksReal('OKO')).toBe(true)
    })
    test('2 Vowels that are part of valid list return true', () => {
      expect(looksReal('AIK')).toBe(true)
      expect(looksReal('EAR')).toBe(true)
      expect(looksReal('YOT')).toBe(true)
    })
    test('2 Vowels that are not part of valid list return false', () => {
      expect(looksReal('COE')).toBe(false)
      expect(looksReal('OEC')).toBe(false)
    })
    test('3 Vowels return false', () => {
      expect(looksReal('EEO')).toBe(false)
      expect(looksReal('YOU')).toBe(false)
    })
  })
  describe('isVowel Tests', () => {
    test('Valid Vowels', () => {
      for (const vowel of currentVowels) {
        expect(isVowel(vowel)).toBe(true)
      }
    })
    test('Invalid Vowel', () => {
      expect(isVowel('K')).toBe(false)
    })

    test('More than a single character throws error', () => {
      expect(() => {
        isVowel('AA')
      }).toThrow(/isVowel only accepts single characters/)
    })
  })
  describe('isConsonant Tests', () => {
    test('Valid Consonant', () => {
      expect(isConsonant('K')).toBe(true)
    })
    test('Invalid Consonant', () => {
      expect(isConsonant('Y')).toBe(false)
    })

    test('More than a single character throws error', () => {
      expect(() => {
        isConsonant('CC')
      }).toThrow(/isConsonant only accepts single characters/)
    })
  })

  describe('isValid2ConsonantCombo Tests', () => {
    test('Valid Combos', () => {
      for (const combo of currentValid2ConsonantCombos) {
        expect(isValid2ConsonantCombo(combo)).toBe(true)
      }
    })
    test('Invalid Combos', () => {
      expect(isValid2ConsonantCombo('BT')).toBe(false)
    })

    test('Number of consonants not equal to 2 throws error', () => {
      expect(() => {
        isValid2ConsonantCombo('AIC')
      }).toThrow(/isValid2ConsonantCombo must be passed 2 consonants only/)
    })
  })

  describe('isValid3ConsonantCombo Tests', () => {
    test('Valid Combos', () => {
      for (const combo of currentValid3ConsonantCombos) {
        expect(isValid3ConsonantCombo(combo)).toBe(true)
      }
    })
    test('Invalid Combos', () => {
      expect(isValid3ConsonantCombo('CSH')).toBe(false)
      expect(isValid3ConsonantCombo('BCD')).toBe(false)
    })

    test('Number of consonants not equal to 2 throws error', () => {
      expect(() => {
        isValid3ConsonantCombo('BBA')
      }).toThrow(/isValid3ConsonantCombo must be passed 3 consonants only/)
    })
  })

  describe('isValid2VowelCombo Tests', () => {
    test('Valid Combos', () => {
      for (const combo of currentValid2VowelCombos) {
        expect(isValid2VowelCombo(combo)).toBe(true)
      }
    })
    test('Invalid Combos', () => {
      expect(isValid2VowelCombo('AA')).toBe(false)
      expect(isValid2VowelCombo('AO')).toBe(false)
      expect(isValid2VowelCombo('EI')).toBe(false)
      expect(isValid2VowelCombo('YI')).toBe(false)
    })

    test('More than two vowel chars throws error', () => {
      expect(() => {
        isValid2VowelCombo('AIO')
      }).toThrow(/isValid2VowelCombo must be passed 2 vowels only/)
    })
  })
  describe('containsDoubleConsonant Tests', () => {
    test('Valid Combos', () => {
      expect(containsDoubleConsonant('BBA')).toBe(true)
      expect(containsDoubleConsonant('ABB')).toBe(true)
    })
    test('Invalid Combos', () => {
      expect(containsDoubleConsonant('BC')).toBe(false)
    })

    test('Number of consonants not equal to 2 throws error', () => {
      expect(() => {
        isValid3ConsonantCombo('containsDoubleConsonant must be passed 2 consonants only')
      }).toThrow(/isValid3ConsonantCombo must be passed 3 consonants only/)
    })
  })
  describe('isAlternatingVowelConsonants tests', () => {
    test('Valid alternations', () => {
      expect(isAlternatingVowelConsonants('AKA')).toBe(true)
      expect(isAlternatingVowelConsonants('KAK')).toBe(true)
    })
    test('Invalid alternations', () => {
      expect(isAlternatingVowelConsonants('AAK')).toBe(false)
      expect(isAlternatingVowelConsonants('AKK')).toBe(false)
      expect(isAlternatingVowelConsonants('KKA')).toBe(false)
      expect(isAlternatingVowelConsonants('KAA')).toBe(false)
    })
  })
  describe('Get Num Vowels and Consonants Tests', () => {
    test('3 Vowels', () => {
      expect(getNumVowelsAndConsonants('AAE')).toEqual({
        consonantCount: 0,
        vowelCount: 3,
      })
    })
    test('2 Vowels, 1 Consonant', () => {
      expect(getNumVowelsAndConsonants('AKI')).toEqual({
        consonantCount: 1,
        vowelCount: 2,
      })
    })
    test('1 Vowel, 2 Consonants', () => {
      expect(getNumVowelsAndConsonants('TAC')).toEqual({
        consonantCount: 2,
        vowelCount: 1,
      })
    })
    test('3 Vowel, 0 Consonants', () => {
      expect(getNumVowelsAndConsonants('EIO')).toEqual({
        consonantCount: 0,
        vowelCount: 3,
      })
    })
  })
})
