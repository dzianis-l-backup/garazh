import { connect } from 'react-redux'
import TodoFilter from './todoFilter.js'
import Action, { FILTER_COMPLETED, FILTER_UNDONE } from './action.js'
import { STATUSES } from './constants.js'

function getIsEnabled({
    filter, targetFilter, todos, targetStatus,
}) {
    return (!filter
        || filter !== targetFilter) && (todos || []).some(({ status }) => status === targetStatus)
}


const mapStateToProps = ({ filter, todos }) => ({
    isEnabledUndone: getIsEnabled({
        filter, targetFilter: FILTER_UNDONE, todos, targetStatus: STATUSES.TODO,
    }),
    isSelectedUndone: filter === FILTER_UNDONE,
    isEnabledCompleted: getIsEnabled({
        filter, targetFilter: FILTER_COMPLETED, todos, targetStatus: STATUSES.DONE,
    }),
    isSelectedCompleted: filter === FILTER_COMPLETED,
})
const mapDispatchToProps = (dispatch) => ({
    onFilterUndone: () => {
        dispatch(new Action(FILTER_UNDONE).toPlain())
    },
    onFilterCompleted: () => {
        dispatch(new Action(FILTER_COMPLETED).toPlain())
    },
})

const propTypes = {
    onFilterUndone: PropTypes.func.isRequired,
    onFilterCompleted: PropTypes.func.isRequired,
    isEnabledUndone: PropTypes.bool.isRequired,
    isSelectedUndone: PropTypes.bool.isRequired,
    isEnabledCompleted: PropTypes.bool.isRequired,
    isSelectedCompleted: PropTypes.bool.isRequired,
}

function TodoFilters({
    onFilterUndone,
    onFilterCompleted,
    isEnabledUndone,
    isSelectedUndone,
    isEnabledCompleted,
    isSelectedCompleted,
}) {
    const filters = [{
        label: 'Undone',
        onClick: onFilterUndone,
        isEnabled: isEnabledUndone,
        isSelected: isSelectedUndone,
    }, {
        label: 'Completed',
        onClick: onFilterCompleted,
        isEnabled: isEnabledCompleted,
        isSelected: isSelectedCompleted,
    }]


    return (
        <div>
            {
                filters.map(({
                    onClick, label, isEnabled, isSelected,
                }) => (
                    <TodoFilter
                        isEnabled={isEnabled}
                        isSelected={isSelected}
                        label={label}
                        onClick={onClick}
                    />
                ))
            }
        </div>
    )
}

TodoFilters.propTypes = propTypes

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilters)
