import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const SurveyNew = () =>{
    return(
        <div>
            <h2>New survey page</h2>
        </div>
    )
}

const Dashboard = () =>{
    return(
        <div>
            <h2>Dashboard page</h2>
        </div>
    )
}

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