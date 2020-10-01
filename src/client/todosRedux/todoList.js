import { STATUSES } from './constants.js'

const propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    toggleStatus: PropTypes.func.isRequired,
}

const defaultProps = {
    todos: [],
}

export default function TodoList(props) {
    const { todos, toggleStatus } = props
    const toggleStatusTodo = React.useCallback(
        (todo) => function toggleStatusTodoClb(event) {
            toggleStatus(todo.id, todo.status)
        }, [toggleStatus],
    )
    const renderTodoFn = React.useCallback((todo) => (
        <li
            key={todo.id}
            style={{ listStyleType: 'none' }}
        >
            <div
                role="switch"
                tabIndex={0}
                aria-checked={todo.status === STATUSES.DONE}
                onClick={toggleStatusTodo(todo)}
                onKeyPress={toggleStatusTodo(todo)}
                style={{ textDecoration: todo.status === STATUSES.DONE ? 'line-through' : '' }}
            >
                {todo.text}
            </div>
        </li>
    ), [toggleStatusTodo])

    return <ul>{todos.map(renderTodoFn)}</ul>
}

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps
