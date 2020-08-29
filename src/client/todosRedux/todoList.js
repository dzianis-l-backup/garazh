const propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
}

const defaultProps = {
    todos: [],
}

export default function TodoList(props) {
    const { todos } = props
    const renderTodoFn = React.useCallback((todo) => todo.text, [])

    return <ul>{todos.map(renderTodoFn)}</ul>
}

TodoList.propTypes = propTypes
TodoList.defaultProps = defaultProps
