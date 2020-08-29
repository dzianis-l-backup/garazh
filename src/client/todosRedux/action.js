export const ADD_TODO = 'ADD_TODO'
export const CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT'

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
}
