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
  const characters = input.split('')
  const indices = characters.map((character, index) => index)
  const picks = []

  // Pick `k` random characters by index, so we can sort them later
  let n = indices.length
  for (let i = 0; i < k; i++) {
    // Pick random index of a character from the input string
    const r = getRandomNumber(n)
    picks.push(indices[r])

    // Swap last character with the one that was picked
    indices[r] = indices[n - 1]

    // Update n. This way we don't need to create new arrays
    n--
  }

  // Put the indexes back in order
  picks.sort((a, b) => (a - b))

  // Map the indexes back to the characters and join them together
  return picks.map((index) => characters[index]).join('')
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
