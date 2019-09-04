import {CounterView} from "./counterView"

export class CounterContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    handleIncrement = () => {
        this.setState(prevState => ({counter: ++prevState.counter}))
    }

    handleDecrement = () => {
        this.setState(prevState => ({ counter: --prevState.counter }))
    }

    render() {
        return <CounterView
            counter={this.state.counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
        />
    }

}
