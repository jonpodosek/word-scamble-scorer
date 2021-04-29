import looksReal,
{
    isVowel,
    isConsonant,
    isValidTripleConsonant,
    isValidDoubleVowel,
    getNumVowelsAndConsonants,
    isAlternatingVowelConsonants
} from './real-word'


describe('Real Word Tests', () => {

    describe('looksReal Tests', () => {
        test('3 Consonants that are in valid list return true', () => {
            expect(looksReal('SCH')).toBe(true)
            expect(looksReal('SCR')).toBe(true)
            expect(looksReal('SHR')).toBe(true)
            expect(looksReal('THR')).toBe(true)
        }),
            test('3 Consonants that are not in valid list return false', () => {
                expect(looksReal('SCC')).toBe(false)
                expect(looksReal('THH')).toBe(false)
                expect(looksReal('BCD')).toBe(false)
            }),
            test('2 Consonant, 1 Vowel always return true', () => {
                expect(looksReal('PAC')).toBe(true)
                expect(looksReal('LOT')).toBe(true)
                expect(looksReal('LWO')).toBe(true)
                expect(looksReal('OWL')).toBe(true)
            }),
            test('2 Vowels, 1 Consonant alternating return true', () => {
                expect(looksReal('ICU')).toBe(true)
                expect(looksReal('OKO')).toBe(true)
            }),
            test('2 Vowels that are part of valid list return true', () => {
                expect(looksReal('AIK')).toBe(true)
                expect(looksReal('EAJ')).toBe(true)
                expect(looksReal('YOT')).toBe(true)
            }),
            test('2 Vowels that are not part of valid list return false', () => {
                expect(looksReal('COE')).toBe(false)
                expect(looksReal('OEC')).toBe(false)
            }),
            test('3 Vowels return false', () => {
                expect(looksReal('EEO')).toBe(false)
                expect(looksReal('YOU')).toBe(false)
            })
    })
    describe('Is Vowel Tests', () => {
        test('Valid Vowels', () => {
            expect(isVowel('A')).toBe(true)
            expect(isVowel('E')).toBe(true)
            expect(isVowel('I')).toBe(true)
            expect(isVowel('O')).toBe(true)
            expect(isVowel('U')).toBe(true)
            expect(isVowel('Y')).toBe(true)
        }),
            test('Invalid Vowel', () => {
                expect(isVowel('K')).toBe(false)
            })
    })
    describe('Is Consonant Tests', () => {
        test('Valid Consonant', () => {
            expect(isConsonant('K')).toBe(true)

        }),
            test('Invalid Consonant', () => {
                expect(isConsonant('Y')).toBe(false)
            })
    })

    describe('is Valid Triple Consonants Tests', () => {
        test('Valid Triple Consonants', () => {
            expect(isValidTripleConsonant('SCH')).toBe(true)
            expect(isValidTripleConsonant('SCR')).toBe(true)
            expect(isValidTripleConsonant('SHR')).toBe(true)
            expect(isValidTripleConsonant('THR')).toBe(true)

        }),
            test('Invalid Triple Consonants', () => {
                expect(isValidTripleConsonant('CSH')).toBe(false)
                expect(isValidTripleConsonant('ABC')).toBe(false)
            })
    })
    describe('is Valid Double Vowel Tests', () => {
        test('Valid Double Vowel', () => {
            expect(isValidDoubleVowel('AI')).toBe(true)
            expect(isValidDoubleVowel('AY')).toBe(true)
            expect(isValidDoubleVowel('EA')).toBe(true)
            expect(isValidDoubleVowel('EE')).toBe(true)
            expect(isValidDoubleVowel('EO')).toBe(true)
            expect(isValidDoubleVowel('IO')).toBe(true)
            expect(isValidDoubleVowel('OA')).toBe(true)
            expect(isValidDoubleVowel('OO')).toBe(true)
            expect(isValidDoubleVowel('OY')).toBe(true)
            expect(isValidDoubleVowel('YA')).toBe(true)
            expect(isValidDoubleVowel('YO')).toBe(true)
            expect(isValidDoubleVowel('YU')).toBe(true)
        }),
            test('Invalid Double Vowel', () => {
                expect(isValidDoubleVowel('AA')).toBe(false)
                expect(isValidDoubleVowel('AO')).toBe(false)
                expect(isValidDoubleVowel('EI')).toBe(false)
                expect(isValidDoubleVowel('YI')).toBe(false)
            })
    })

    describe('isAlternatingVowelConsonants tests', () => {
        test('Valid alternations', () => {
            expect(isAlternatingVowelConsonants('AKA')).toBe(true)
            expect(isAlternatingVowelConsonants('KAK')).toBe(true)
        }),
            test('Invalid alternations', () => {
                expect(isValidDoubleVowel('AAK')).toBe(false)
                expect(isValidDoubleVowel('AKK')).toBe(false)
                expect(isValidDoubleVowel('KKA')).toBe(false)
                expect(isValidDoubleVowel('KAA')).toBe(false)
            })
    })
    describe('Get Num Vowels and Consonants Tests', () => {
        test('3 Vowels', () => {
            expect(getNumVowelsAndConsonants('AAE')).toEqual(
                {
                    consonantCount: 0,
                    vowelCount: 3,
                })
        }),
            test('2 Vowels, 1 Consonant', () => {
                expect(getNumVowelsAndConsonants('AKI')).toEqual(
                    {
                        consonantCount: 1,
                        vowelCount: 2,
                    })
            }),
            test('1 Vowel, 2 Consonants', () => {
                expect(getNumVowelsAndConsonants('TAC')).toEqual(
                    {
                        consonantCount: 2,
                        vowelCount: 1,
                    })
            }),
            test('3 Vowel, 0 Consonants', () => {
                expect(getNumVowelsAndConsonants('EIO')).toEqual(
                    {
                        consonantCount: 0,
                        vowelCount: 3,
                    })
            })
    })
})