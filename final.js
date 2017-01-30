// Assumption: k is always the third item in argv
// (node is first, program.js is second)
const [, , k] = process.argv


const probabilities = (N, k) => {

  const probabilities = new Array(N)

  // Fill with ones
  probabilities.fill(1)

  for (let i = 0; i < k - 1; i++) {
    for (let j = 0; j < N; j++) {
      probabilities[j] = 0
      for (let y = j + 1; y < N; y++) {
        probabilities[j] += probabilities[y]
      }
    }
  }

  return probabilities
}

// Pick randomly from weighted items
const random = (weights) => {
  const sum = weights.reduce((val, acc) => (val + acc))
  let r = Math.floor(Math.random() * sum)
  let index
  for (let i = 0; i < weights.length; i++) {
    if (r < weights[i]) {
      return i
      break;
    }
    r -= weights[i]
  }
  throw Error('invalid')
}

process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (input) => {

  const randomSample = (string, k) => {

    // Base case
    if (k === 0) {
      return ''
    }

    const weights = probabilities(string.length, k)
    const index = random(weights)
    const letter = string.charAt(index)

    return letter + randomSample(
        string.substring(index + 1),
        k - 1
      )
  }

  process.stdout.write(randomSample(input, k))

})