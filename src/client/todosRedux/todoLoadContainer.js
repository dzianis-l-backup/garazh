import { connect } from 'react-redux'
import Action, { LOAD_START, LOAD_END } from './action.js'
import TodoLoad from './todoLoad.js'

function createActionStartLoad() {
    return new Action(LOAD_START).toPlain()
}

function createActionEndLoad(json) {
    return new Action(LOAD_END).setPayload(json).toPlain()
}

function mapDispatchToProps(dispatch) {
    return {
        onLoad: () => {
            dispatch(createActionStartLoad())
            setTimeout(() => {
                fetch('https://cat-fact.herokuapp.com/facts')
                    .then((response) => response.json())
                    .then((json) => dispatch(createActionEndLoad(json)))
            }, 3000)
        },
    }
}

function mapStateToProps(state) {
    return { isLoading: state.isLoading }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoLoad)
