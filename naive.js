/**
 * This is a naive/bruteforce approach
 * It will probably not work on larger datasets
 */

// Assumption: k is always the third item in argv
// (node is first, program.js is second)
const [, , k] = process.argv

// Helper function to generate all samples
const allSamples = (string, l, prefix = '', samples = []) => {

  // Error
  if (string.length < l) {
    throw Error('Invalid input')
  }

  // Base case
  if (l === 0) {
    samples.push(prefix)
    return samples
  }

  // Base case
  if (l === string.length) {
    samples.push(prefix + string)
    return samples
  }

  // Iterate over all characters that can still fit in a sample of length l
  for (let i = string.length - l; 0 <= i; i--) {
    // Recursive call
    allSamples(
      string.substring(i + 1), // Remaining string
      l - 1,
      prefix + string.charAt(i), // Current character added to prefix
      samples
    )
  }

  return samples
}

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (input) => {
  const samples = allSamples(input, k)
  const r = Math.floor(Math.random() * samples.length)

  process.stdout.write(samples[r])
})




