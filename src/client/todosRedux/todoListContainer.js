import { connect } from 'react-redux'
import TodoList from './todoList.js'
import Action, { TOGGLE_STATUS, FILTER_UNDONE, FILTER_COMPLETED } from './action.js'
import { STATUSES } from './constants.js'

function mapStateToProps({ filter, todos }) {
    return {
        todos: (todos || []).filter(({ status }) => {
            if (filter === FILTER_COMPLETED) {
                return status === STATUSES.DONE
            }

            if (filter === FILTER_UNDONE) {
                return status === STATUSES.TODO
            }

            return true
        }),
    }
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
