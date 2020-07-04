import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Footer from './components/footer.js'
import AddTodo from './components/addTodo.js'
import VisibleTodoList from './components/visibleTodoList.js'
import todoApp from './reducers.js'

const store = createStore(todoApp)

const App = () => (
    <Provider store={store}>
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>

    </Provider>
)

export default App
