import React from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import _ from 'lodash';

const FIELDS = [
    {label:'Survey Title', name:'title'},
    {label:'Subject line',name:'subject'},
    {label:'Email body',name:'body'},
    {label:'Recipient list',name:'emails'}
];


class SurveyForm extends React.Component{

    renderFields(){
      return _.map(FIELDS,({label,name}) =>{return <Field component={SurveyField} type="text" label={label} name={name}/>})  
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
            {this.renderFields()};
            <Link className="red btn-flat white-text" to ='/surveys'>
                Cancel
            </Link>
            <button className="teal btn-flat right white-text" type="submit">Next<i className="material-icons right">done</i></button>
            </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = "You must provide a title";
        
    }
    return errors
}

export default reduxForm({
    validate:validate,
    form:'surveyForm'
})(SurveyForm);
