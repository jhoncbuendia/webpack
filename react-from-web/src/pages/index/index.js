import React from 'react'
import { connect } from 'react-redux'
import { getVersion, testApi } from '../../redux/action/index'

class Index extends React.Component {

    componentWillMount() {
        console.log('props', this.props)
        //this.props.testApi((response) => { console.log('response', response) })
        this.props.testApi()
    }

    render() {
        return (
            <div>
                Index Page
                <pre>{JSON.stringify(this.props)}</pre>
            </div>)
    }
}

function mapStateToPros(state) {
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getVersion: () => dispatch(getVersion()),
        testApi: () => dispatch(testApi())
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Index)