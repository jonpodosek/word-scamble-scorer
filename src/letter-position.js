export function anyLettersMatchByPosition(scrambledWord, realWord) {
  for (let idx = 0; idx < realWord.length; idx++) {
    if (scrambledWord.charAt(idx) === realWord.charAt(idx)) {
      return true
    }
  }
  return false
}

export function firstLetterMatches(scrambledWord, realWord) {
  return scrambledWord.charAt(0) === realWord.charAt(0)
}

export function twoConsecutiveLettersMatchByPosition(scrambledWord, realWord) {
  for (let idx = 0; idx < realWord.length - 1; idx++) {
    if (
      scrambledWord.charAt(idx) === realWord.charAt(idx) &&
      scrambledWord.charAt(idx + 1) === realWord.charAt(idx + 1)
    ) {
      return true
    }
  }
  return false
}
