const propTypes = {
    todoText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
}

const defaultProps = {
    todoText: '',
}

export default function TodoInput(props) {
    const { todoText, onChange } = props

    return <input value={todoText} onChange={onChange} />
}

TodoInput.propTypes = propTypes
TodoInput.defaultProps = defaultProps
