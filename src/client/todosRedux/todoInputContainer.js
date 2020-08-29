import { connect } from 'react-redux'
import TodoInput from './todoInput.js'
import Action, { CHANGE_TODO_TEXT } from './action'

function createActionTodoText(text) {
    return new Action(CHANGE_TODO_TEXT).add('todoText', text).toPlain()
}

function mapStateToProps(state) {
    return { todoText: state.todoText }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: (event) => {
            const todoText = event.target.value

            dispatch(createActionTodoText(todoText))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput)
