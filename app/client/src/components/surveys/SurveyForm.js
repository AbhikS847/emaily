import React from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
    {label:'Survey Title', name:'title'},
    {label:'Subject line',name:'subject'},
    {label:'Email body',name:'body'},
    {label:'Recipient list',name:'emails'}
];


class SurveyForm extends React.Component{

    renderFields(){
        
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()};
            <button type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyForm);
