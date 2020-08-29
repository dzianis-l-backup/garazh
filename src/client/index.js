import {
    HashRouter as Router,

} from 'react-router-dom'
import App from './app/app.js'

const renderElement = (
    <Router>
        <App basename="" hashType="noslash" />
    </Router>
)

ReactDOM.render(renderElement, document.getElementById('_app'))
