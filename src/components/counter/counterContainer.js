import {CounterView} from "./counterView"

var a = 8;


export class CounterContainer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
        }
    }

    handleChange = () => {

    }

    render() {
        return <CounterView
            counter={this.state.counter}
            onChange={this.handleChange}
        />
    }

}
