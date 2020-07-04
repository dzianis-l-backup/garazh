import { combineReducers } from 'redux'

import {
    ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters,
} from './actions.js'


function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    if (action.type === SET_VISIBILITY_FILTER) {
        return action.filter
    }

    return state
}


function todos(state = [], action) {
    if (action.type === ADD_TODO) {
        return [...state, { text: action.text, completed: false, id: action.id }]
    }

    if (action.type === TOGGLE_TODO) {
        return state.map((todo) => {
            if (todo.id === action.id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        })
    }

    return state
}

export default combineReducers({
    visibilityFilter,
    todos,
})
