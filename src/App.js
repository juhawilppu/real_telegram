import React, { Component } from 'react';
import Messages from './Messages';
import { Route, BrowserRouter } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <a href="/">Main</a>
                        <a href="/test">Test</a>
                        <a href="/more">More</a>
                    </nav>

                    <Route path="/" exact component={Messages} />
                    <Route path="/test" exact render={() => <div>test</div>} />
                    <Route path="/more" exact render={() => <div>more</div>} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;