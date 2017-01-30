/**
 * Returns a random number between 0 and `n` (exclusive)
 *
 * @param {number} n
 * @returns {number}
 */
const getRandomNumber = (n) => {
  return Math.floor(Math.random() * n)
}

/**
 * Returns a representative random sample of `k` characters from `input`
 *
 * @param {string} input
 * @param {number} k
 * @returns {string}
 */
const getRepresentativeRandomSample = (input, k) => {
  // Convert string to array
  let characters = input.split('')

  // Remove characters until there are `k` characters left
  while (characters.length > k) {
    // Remove random character
    const indexToRemove = getRandomNumber(characters.length)
    characters.splice(indexToRemove, 1)
  }

  return characters.join('')
}

/**
 * Main function
 * Deals with input and output
 */
const main = () => {
  // Set encoding to utf-8
  process.stdin.setEncoding('utf8')

  let input = ''

  // Receive input
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read()
    if (chunk !== null) {
      input += chunk
    }
  })

  // Run program once all the input is received
  process.stdin.on('end', () => {
    // Assumption: k is always the third item in argv
    // (node is first, script.js is second)
    const k = parseInt(process.argv[2], 10)

    // Get solution and print it out
    const solution = getRepresentativeRandomSample(input, k)
    process.stdout.write(solution)
  })
}

// Run main function
main()
