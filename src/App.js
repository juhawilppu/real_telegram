import React, { Component } from 'react';
import Messages from './Messages';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExample from './AppBarExample';
import BottomNavigationExample from './BottomNavigationExample';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div>
                        <AppBarExample />
                        <nav>
                            <Link to="/">Main</Link>
                            <Link to="/test">Test</Link>
                            <Link to="/more">More</Link>
                        </nav>

                        <Route path="/" exact component={Messages} />
                        <Route path="/messages/:messageId" component={Messages} />
                        <Route path="/test" exact render={() => <div>test</div>} />
                        <Route path="/more" exact render={() => <div>more</div>} />

                        <BottomNavigationExample />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default App;