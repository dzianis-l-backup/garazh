import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import TodoAddContainer from './todoAddContainer.js'
import TodoInputContainer from './todoInputContainer.js'
import TodoListContainer from './todoListContainer.js'
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
                <TodoAddContainer />
                <TodoListContainer />
            </>
        </Provider>
    )
}
