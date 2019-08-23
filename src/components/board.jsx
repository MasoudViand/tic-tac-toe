import React from 'react'

// Import kfunctions
import * as utils from '../utils/functions'


function Box(props) {
    return (
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

// Create Board component
export class Board extends React.Component {
    constructor(props) {
        super(props)

        // Initialize component state
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        }
    }


    // click conditions
    handleBoxClick(index) {

        const boxes = this.state.boxes.slice()

        // Get current state of history
        let history = this.state.history

        // winner
        if (utils.findWinner(boxes) || boxes[index]) {
            return
        }

        // Stop the game if all boxes are clicked (filled)
        if(utils.areAllBoxesClicked(boxes) === true) {
            return
        }

        // Mark the box either as 'x' or 'o'
        boxes[index] = this.state.xIsNext ? 'x' : 'o'

        // Add move to game history
        history.push(this.state.xIsNext ? 'x' : 'o')

        // Update component state with new data
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    // Handle board restart - set component state to initial state
    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render() {
        // Get winner (if there is any)
        const winner = utils.findWinner(this.state.boxes)

        // Are all boxes checked?
        const isFilled = utils.areAllBoxesClicked(this.state.boxes)

        // Status message
        let status

        if (winner) {
            // winner name
            status = `The winner is: ${winner}!`
            // drawn
        } else if(!winner && isFilled) {
            status = 'Game drawn!'

        } else {
            // turn
            status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`
        }

        return (
            <>

                {/* The game board */}
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="board-heading">{status}</h2>

                        <div className="board-row">
                            <Box value={this.state.boxes[0]} onClick={() => this.handleBoxClick(0)} />

                            <Box value={this.state.boxes[1]} onClick={() => this.handleBoxClick(1)} />

                            <Box value={this.state.boxes[2]} onClick={() => this.handleBoxClick(2)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[3]} onClick={() => this.handleBoxClick(3)} />

                            <Box value={this.state.boxes[4]} onClick={() => this.handleBoxClick(4)} />

                            <Box value={this.state.boxes[5]} onClick={() => this.handleBoxClick(5)} />
                        </div>

                        <div className="board-row">
                            <Box value={this.state.boxes[6]} onClick={() => this.handleBoxClick(6)} />

                            <Box value={this.state.boxes[7]} onClick={() => this.handleBoxClick(7)} />

                            <Box value={this.state.boxes[8]} onClick={() => this.handleBoxClick(8)} />
                        </div>
                    </div>



                    {/* start new game */}
                    <div className="board-footer">
                        <button className="btn" onClick={this.handleBoardRestart}>Start new game</button>
                    </div>
                </div>
            </>
        )
    }
}