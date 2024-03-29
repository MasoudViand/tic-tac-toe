export function findWinner(boxes) {
    // wining cells
    const rows = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < rows.length; i++) {
        const [a, b, c] = rows[i]

        // if any player wins
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            // Return the winner ('x' or 'o')
            return boxes[a]
        }
    }

    return null
}

export function areAllBoxesClicked(boxes) {
    let count = 0
// status of cells
    boxes.forEach(function (item) {
        if (item !== null) {

            count++
        }
    })

    // if all filled
    if (count === 9) {
        return true
    } else {
        return false
    }
}