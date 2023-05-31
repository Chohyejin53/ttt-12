export function calculateWinner (squares) {
  const lines = [
    /**
       * -------------
       * | X | X | X |
       * -------------
       * |   |   |   |
       * -------------
       * |   |   |   |
       * -------------
       */
    [0, 1, 2],
    /**
       * -------------
       * |   |   |   |
       * -------------
       * | X | X | X |
       * -------------
       * |   |   |   |
       * -------------
       */
    [3, 4, 5],
    /**
       * -------------
       * |   |   |   |
       * -------------
       * |   |   |   |
       * -------------
       * | X | X | X |
       * -------------
       */
    [6, 7, 8],
    /**
       * -------------
       * | X |   |   |
       * -------------
       * | X |   |   |
       * -------------
       * | X |   |   |
       * -------------
       */
    [0, 3, 6],
    /**
       * -------------
       * |   | X |   |
       * -------------
       * |   | X |   |
       * -------------
       * |   | X |   |
       * -------------
       */
    [1, 4, 7],
    /**
       * -------------
       * |   |   | X |
       * -------------
       * |   |   | X |
       * -------------
       * |   |   | X |
       * -------------
       */
    [2, 5, 8],
    /**
       * -------------
       * | X |   |   |
       * -------------
       * |   | X |   |
       * -------------
       * |   |   | X |
       * -------------
       */
    [0, 4, 8],
    /**
       * -------------
       * |   |   | X |
       * -------------
       * |   | X |   |
       * -------------
       * | X |   |   |
       * -------------
       */
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i]
    if (squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
