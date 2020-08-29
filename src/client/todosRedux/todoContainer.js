import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TodoAdd from './todoAdd.js'
import TodoInputContainer from './todoInputContainer.js'
import TodoList from './todoList.js'
import reducers from './reducers.js'
import { ENV } from './constants.js'

const env = process.env.NODE_ENV
const store = createStore(
    reducers,
    { todos: [], todoText: '' },
    env === ENV.development ? composeWithDevTools() : undefined,
)

export default function TodoContainer() {
    return (
        <Provider store={store}>
            <>
                <TodoInputContainer />
                <TodoAdd />
                <TodoList />
            </>
        </Provider>
    )
}
