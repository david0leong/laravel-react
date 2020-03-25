import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from 'reactstrap'

import Header from './Header'
import Products from './Products'

const App = () => (
    <BrowserRouter>
        <Header />

        <Container className="py-4">
            <Switch>
                <Route exact path="/" component={Products} />
            </Switch>
        </Container>
    </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('app'))
