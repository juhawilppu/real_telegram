import React, { Component } from 'react';
import Messages from './Messages';
import TestPage from './TestPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div>
                        <NavBar />
                        <Switch>
                            <Route path="/" exact component={Messages} />
                            <Route path="/test" exact component={TestPage} />
                            <Route path="/more" exact component={TestPage} />
                            <Route path="/:messageId" component={Messages} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        )
    }
}

export default App;