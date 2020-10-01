const propTypes = { onLoad: PropTypes.func.isRequired, isLoading: PropTypes.bool.isRequired }

export default function TodoLoad(props) {
    if (props.isLoading) {
        return <span>...Loading</span>
    }

    return <button type="button" onClick={props.onLoad}>Load</button>
}

TodoLoad.propTypes = propTypes
