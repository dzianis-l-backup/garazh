import ReduxApp from '../reduxTodos/app.js'
import TodosRedux from '../todosRedux/app.js'

const todosRedux = '/todos-redux'
const reduxTodosExample = '/redux-todos-example'

export const LINK_CONFIG = {
    [todosRedux]: 'Todos Redux',
    [reduxTodosExample]: 'Redux Todos',
}

export const APPS_CONFIG = {
    [todosRedux]: TodosRedux,
    [reduxTodosExample]: ReduxApp,
}
