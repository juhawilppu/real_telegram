import React, { Component } from 'react';
import Messages from './Messages';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarExample from './AppBarExample';
import BottomNavigationExample from './BottomNavigationExample';
import { BottomNavigation } from 'material-ui/BottomNavigation';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div>
                        <AppBarExample />
                        <nav>
                            <a href="/">Main</a>
                            <a href="/test">Test</a>
                            <a href="/more">More</a>
                        </nav>

                        <Route path="/" exact component={Messages} />
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