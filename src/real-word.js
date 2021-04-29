//TODO - move constants to their own file
const VOWELS = [
    'A', 'E', 'I', 'O', 'U', 'Y'
]

//Real Word
const VALID_DOUBLE_VOWELS = [
    'AI', 'AY', 'EA', 'EE', 'EO', 'IO', 'OA', 'OO', 'OY', 'YA', 'YO', 'YU'
]

const VALID_TRIPLE_CONSONANTS = [
    'SCH', 'SCR', 'SHR', 'THR'
]

export function isVowel(character) {
    // if (character.length !== 1) {
    //     throw Error("Is Vowel only accepts single characters");
    // }
    return VOWELS.includes(character)
}

export function isConsonant(character) {
    return !isVowel(character)
}

export function isValidTripleConsonant(substring) {
    return VALID_TRIPLE_CONSONANTS.includes(substring);
}

//might be okay if theres overlap with these
//as in if this condition contains another condition that's invalid
export function isValidDoubleVowel(substring) {
    return VALID_DOUBLE_VOWELS.includes(substring.substring(0, 2)) || VALID_DOUBLE_VOWELS.includes(substring.substring(1, 3))
}

//iab or abi
function isDoubleConsonant(substring) {
    return VALID.includes(substring.substring(0, 2)) || VALID_DOUBLE_VOWELS.includes(substring.substring(1, 3))

    //if both chars are not in vowels
}

export function isAlternatingVowelConsonants(substring) {
    for (let idx = 0; idx < substring.length - 1; idx++) {
        const firstChar = substring.charAt(idx)
        const nextChar = substring.charAt(idx + 1)
        if (isVowel(firstChar) && isVowel(nextChar) || isConsonant(firstChar) && isConsonant(nextChar)) {
            return false;
        }
    }
    return true
}

export function getNumVowelsAndConsonants(substring) {
    let consonantCount = 0;
    let vowelCount = 0;

    for (const char of substring) {
        if (isVowel(char)) {
            vowelCount++
        } else {
            consonantCount++
        }
    }

    return {
        consonantCount, //todo; convert to single field i think?
        vowelCount
    }
}



const looksReal = word => {

    if (word.length == 1) {
        return true;
    } else if (word.length == 2) {
        //not sure?
    }

    /*
        - letters alternate between vowels and consonants
        - double consonants allowed, but not more then 2, EXCEPT:
        - 'SCH', 'SCR', 'SHR', 'THR'
        - only these double Vowels allowed:
            - 'AI', 'AY', 'EA', 'EE', 'EO', 'IO', 'OA', 'OO', 'OY', 'YA', 'YO', 'YU'
        - no other combos are allowed (implies no double or more vowels)
    */
    /* iterator through word
    for any 3 consecutive chars - if they're not legal double vowels, alternating vowels, or double chars, or contain the first two chars of allowed double consonents
    'return false'
    */
    /**
     *  3C - if NOT approved list, return false
     * 2C 1V - continue (either double CCs or CVC, either is fine) // so dont even check this
     * 2V 1C - if NOT approved double vowels && NOT alternating return false
     * else false
     */

    for (let i = 1; i < word.length - 1; i++) {
        const substring = word.substring(i - 1, i + 2); //might wanna do word.slice for immutability

        const { consonantCount, vowelCount } = getNumVowelsAndConsonants(substring)
        if (consonantCount === 3) {
            if (!isValidTripleConsonant(substring)) {
                return false;
            }
        } else if (consonantCount === 2 && vowelCount === 1) {
            //do nothing
            continue;
        } else if (consonantCount === 1 && vowelCount === 2) {
            if (!isAlternatingVowelConsonants(substring) && !isValidDoubleVowel(substring)) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

export default looksReal;