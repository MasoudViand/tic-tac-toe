import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Import Board and
import { Board } from './components/board'
import './styles.css'



// Create App component
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <BrowserRouter>
                    <Route path="/" component={Board}/>
                </BrowserRouter>
            </div>
        )
    }
}

// Render the App component into DOM
ReactDOM.render(<App />, document.getElementById('root'))