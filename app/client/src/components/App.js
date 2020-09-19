import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends React.Component{

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <div className="container">
            <Router>
            <Header />
                <Route path="/" exact component={Landing}></Route>
                <Route exact path="/surveys" component={Dashboard}></Route>
                <Route path="/surveys/new" component={SurveyNew}></Route>
            </Router>
            </div>
        )
    }
}

export default connect(null,actions)(App);