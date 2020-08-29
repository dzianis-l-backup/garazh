import './_app.scss'
import {
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import { LINK_CONFIG, APPS_CONFIG } from './appConfig.js'

export default function App() {
    return (
        <Switch>
            {Object.keys(APPS_CONFIG).map((route) => {
                const AppCmp = APPS_CONFIG[route]

                return (
                    <Route path={route}>
                        <AppCmp />
                    </Route>
                )
            })}
            <Route exact path="/">
                <ul>
                    {Object.keys(LINK_CONFIG)
                        .map((route) => (
                            <li>
                                <Link to={route}>
                                    {LINK_CONFIG[route]}
                                </Link>
                            </li>
                        ))}
                </ul>
            </Route>
        </Switch>
    )
}
