export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT'
export const TOGGLE_STATUS = 'TOGGLE_STATUS'
export const LOAD_START = 'LOAD_START'
export const LOAD_END = 'LOAD_END'
export const FILTER_UNDONE = 'FILTER_UNDONE'
export const FILTER_COMPLETED = 'FILTER_COMPLETED'

export default class Action {
    static makeAction(plainAction) {
        const action = new Action(plainAction.type)

        Object.keys(plainAction).forEach((key) => {
            action.add(key, plainAction[key])
        })

        return action
    }

    constructor(type) {
        this.type = type
    }

    add(key, value) {
        this[key] = value

        return this
    }

    get(key) {
        return this[key]
    }

    getType() {
        return this.type
    }

    toPlain() {
        return Object.keys(this).reduce((acc, key) => {
            acc[key] = this[key]

            return acc
        }, {})
    }

    setPayload(payload) {
        this.add('payload', payload)

        return this
    }

    getPayload() {
        return this.get('payload')
    }
}
