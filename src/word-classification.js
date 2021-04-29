import { anyLettersMatchByPosition, firstLetterMatches, twoConsecutiveLettersMatchByPosition } from './letter-position'
import looksReal from './real-word'

const calculateClassification = (scrambledWord, realWord) => {
  const notAScrambleOutput = () => `${scrambledWord} is not a scramble of ${realWord}`
  const scrambleOutput = (classification) => `${scrambledWord} is a ${classification} scramble of ${realWord}`

  if (scrambledWord === realWord) {
    return notAScrambleOutput(scrambledWord, realWord)
  } else if (
    (firstLetterMatches(scrambledWord, realWord) || twoConsecutiveLettersMatchByPosition(scrambledWord, realWord)) &&
    !looksReal(scrambledWord)
  ) {
    return scrambleOutput('poor')
  } else if (!anyLettersMatchByPosition(scrambledWord, realWord) && looksReal(scrambledWord)) {
    return scrambleOutput('hard')
  } else {
    return scrambleOutput('fair')
  }
}

export function sanitizeInput(word) {
  if (!word) {
    throw Error('Please provide a word with a length of 1 or more characters')
  }

  return word.trim().toUpperCase()
}

export default calculateClassification
