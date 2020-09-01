import { connect } from 'react-redux'
import TodoAdd from './todoAdd.js'
import Action, { ADD_TODO } from './action.js'

function createActionAdd() {
    return new Action(ADD_TODO).toPlain()
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(createActionAdd()),
    }
}

export default connect(undefined, mapDispatchToProps)(TodoAdd)
