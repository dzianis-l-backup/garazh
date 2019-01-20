
export class CounterView extends React.Component {

    render() {
        return <div>
            <span>{this.props.counter}</span>
            <button>+</button>
            <button>-</button>
        </div>
    }

}
