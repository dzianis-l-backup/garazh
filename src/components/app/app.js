import './_app.scss';
import {CounterContainer} from '../counter/counterContainer.js'
import Context from '../core/context.js'

export class App extends React.Component {

    render() {
        return <CounterContainer />
    }

}