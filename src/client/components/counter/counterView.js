export class CounterView extends React.Component {

    render() {
        const {onIncrement, onDecrement} = this.props
        return <div>
            <span>{this.props.counter}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    }

}
