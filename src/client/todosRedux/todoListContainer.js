import { connect } from 'react-redux'
import TodoList from './todoList.js'
import Action, { TOGGLE_STATUS } from './action.js'

function mapStateToProps(state) {
    return { todos: state.todos }
}

function createActionToggleStatus(id, status) {
    return new Action(TOGGLE_STATUS)
        .add('status', status)
        .add('id', id)
        .toPlain()
}

function mapDispatchToProps(dispatch) {
    return {
        toggleStatus: (id, status) => {
            dispatch(createActionToggleStatus(id, status))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
