// Assumption: k is always the third item in argv
// (node is first, program.js is second)
const [, , k] = process.argv

const matrix = (N) => {

  const matrix = new Array(N)

  // Fill first rows with ones
  const first = new Array(N)
  first.fill(1)
  matrix[1] = first

  for (let i = 2; i <= N; i++) {
    matrix[i] = new Array(N)
    for (let j = 0; j < N; j++) {
      matrix[i][j] = 0
      for (let y = j + 1; y < N; y++) {
        matrix[i][j] += matrix[i - 1][y]
      }
    }
  }

  return matrix
}


process.stdin.resume()
process.stdin.setEncoding('utf8')

process.stdin.on('data', (input) => {

  const n = input.length

  // 3D array
  // First index is length of the string
  // Second index is the amount of characters to pick from the string
  // Third index is the index of the character in the string
  // Value is how many times it will be present in a sample
  const matrices = new Array(n + 1)
  for (let i = 0; i <= n; i++) {
    matrices[i] = matrix(i)
  }

  const randomSample = (string, k) => {

    if (k === 0) {
      return ''
    }

    const probabilities = matrices[string.length][k]

    // Pick randomly from weighted items
    const sum = probabilities.reduce((val, acc) => (val + acc))
    let r = Math.floor(Math.random() * sum)
    let index
    for (let i = 0; i < probabilities.length; i++) {
      if (r < probabilities[i]) {
        index = i
        break;
      }
      r -= probabilities[i]
    }

    const letter = string.charAt(index)

    return letter + randomSample(
        string.substring(index + 1),
        k - 1
      )
  }

  process.stdout.write(randomSample(input, k))

})

