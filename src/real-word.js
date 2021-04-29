import { VOWELS, VALID_LETTER_COMBOS } from './constants'

export function isVowel(character) {
  if (character.length !== 1) {
    throw new Error('isVowel only accepts single characters')
  }
  return VOWELS.includes(character)
}

export function isConsonant(character) {
  if (character.length !== 1) {
    throw new Error('isConsonant only accepts single characters')
  }
  return !isVowel(character)
}

export function isValid2ConsonantCombo(substring) {
  const { consonantCount } = getNumVowelsAndConsonants(substring)
  if (consonantCount !== 2) {
    throw new Error('isValid2ConsonantCombo must be passed 2 consonants only')
  }

  for (let idx = 0; idx < substring.length - 1; idx++) {
    const firstTwoChars = substring.substring(idx, idx + 2)
    if (VALID_LETTER_COMBOS.includes(firstTwoChars)) {
      return true
    }
  }
  return false
}
export function isValid3ConsonantCombo(substring) {
  const { consonantCount } = getNumVowelsAndConsonants(substring)
  if (consonantCount !== 3) {
    throw new Error('isValid3ConsonantCombo must be passed 3 consonants only')
  }
  return VALID_LETTER_COMBOS.includes(substring)
}

export function isValid2VowelCombo(substring) {
  const { vowelCount } = getNumVowelsAndConsonants(substring)
  if (vowelCount !== 2) {
    throw new Error('isValid2VowelCombo must be passed 2 vowels only')
  }

  for (let idx = 0; idx < substring.length - 1; idx++) {
    const firstTwoChars = substring.substring(idx, idx + 2)
    if (VALID_LETTER_COMBOS.includes(firstTwoChars)) {
      return true
    }
  }
  return false
}

export function containsDoubleConsonant(substring) {
  const { consonantCount } = getNumVowelsAndConsonants(substring)
  if (consonantCount !== 2) {
    throw new Error('containsDoubleConsonant must be passed 2 consonants only')
  }

  for (let idx = 0; idx < substring.length - 1; idx++) {
    if (substring.charAt(idx) === substring.charAt(idx + 1)) {
      return true
    }
  }
  return false
}

export function isAlternatingVowelConsonants(substring) {
  for (let idx = 0; idx < substring.length - 1; idx++) {
    const firstChar = substring.charAt(idx)
    const nextChar = substring.charAt(idx + 1)
    if ((isVowel(firstChar) && isVowel(nextChar)) || (isConsonant(firstChar) && isConsonant(nextChar))) {
      return false
    }
  }
  return true
}

export function getNumVowelsAndConsonants(substring) {
  let consonantCount = 0
  let vowelCount = 0

  for (const char of substring) {
    if (isVowel(char)) {
      vowelCount++
    } else {
      consonantCount++
    }
  }

  return {
    consonantCount,
    vowelCount,
  }
}

const looksReal = (word) => {
  if (word.length === 1) {
    return true
  } else if (word.length === 2) {
    return !isAlternatingVowelConsonants(word) && !isValid2ConsonantCombo(word) && !isValid2VowelCombo(word)
  }

  for (let i = 1; i < word.length - 1; i++) {
    const threeCharSubstring = word.slice(i - 1, i + 2)

    if (isAlternatingVowelConsonants(threeCharSubstring)) {
      continue
    }

    const { consonantCount, vowelCount } = getNumVowelsAndConsonants(threeCharSubstring)

    switch (true) {
      case consonantCount === 3 && vowelCount === 0:
        if (!isValid3ConsonantCombo(threeCharSubstring)) {
          return false
        }
        i++ //move i to final char of 3 valid 3 char combo SCH
        break
      case consonantCount === 2 && vowelCount === 1:
        if (!containsDoubleConsonant(threeCharSubstring) && !isValid2ConsonantCombo(threeCharSubstring)) {
          return false
        }
        break
      case consonantCount === 1 && vowelCount === 2:
        if (!isValid2VowelCombo(threeCharSubstring)) {
          return false
        }
        break
      default:
        return false
    }
  }
  return true
}

export default looksReal
