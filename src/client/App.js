import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Programs from './components/Programs';
import ProgramDetail from './components/ProgramDetail';
import SectionDetail from './components/SectionDetail';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path='/' component={Programs} />
                    <Route exact path='/program/:id' component={ProgramDetail}/>
                    <Route exact path='/program/:program_id/:id' component={SectionDetail}/>
                </div>
            </Router>
        );
    }
}

export default App;
