const propTypes = {
    onAdd: PropTypes.func.isRequired,
}

export default function TodoAdd(props) {
    const { onAdd } = props

    return (
        <button type="button" onClick={onAdd}>
            Add
        </button>
    )
}

TodoAdd.propTypes = propTypes
