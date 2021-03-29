import React from "react"
import { Link, Switch, Route } from "react-router-dom"

import "./styles.css"
import Home from "./components/Home"
import Comics from "./components/Comics"
import Manga from "./components/Manga"

function App() {
    return (
        <div>
            <div>
                <h1>Typical Comics</h1>

                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/comics">Comcis</Link>
                    <Link to="/manga">Manga</Link>
                </nav>
            </div>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/comics">
                    <Comics />
                </Route>

                <Route path="/manga">
                    <Manga />
                </Route>
            </Switch>
        </div>
    )
}

export default App