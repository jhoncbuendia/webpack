import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/config'
import Index from './pages/index/'

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        )
    }
}

ReactDom.render(<App></App>, document.getElementById('root'))