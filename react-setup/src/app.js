import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            version: '1.0'
        }
    }

    render() {
        return (
            <h1>New React App {this.state.version}</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))