const propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
}

export default function Filter({
    label, onClick, isEnabled, isSelected,
}) {
    const style = isSelected ? { backgroundColor: 'green', color: 'white' } : null

    return <button disabled={!isEnabled} style={style} type="button" onClick={onClick}>{label}</button>
}

Filter.propTypes = propTypes
