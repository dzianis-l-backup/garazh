import Action, { ADD_TODO, CHANGE_TODO_TEXT } from './action.js'
import { composeReducers } from './utils.js'

export function reducerAddTodo(prevState, action) {
    const { todos, todoText } = prevState
    const type = Action.makeAction(action).getType()

    if (ADD_TODO === type) {
        return { todos: [...todos, { text: todoText }] }
    }

    return prevState
}

export function reducerChangeTodoText(prevState, plainAction) {
    const action = Action.makeAction(plainAction)

    if (CHANGE_TODO_TEXT === action.getType()) {
        return { ...prevState, todoText: action.get('todoText') }
    }

    return prevState
}

export default function reducers(state, action) {
    return composeReducers(reducerChangeTodoText)(state, action)
}
