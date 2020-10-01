import React from 'react';
import {reduxForm,Field} from 'redux-form';
import SurveyField from './SurveyField';
import {Link} from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash';
import formFields from './formFields';

class SurveyForm extends React.Component{

    renderFields(){
      return _.map(formFields,({label,name}) =>{return <Field component={SurveyField} type="text" label={label} name={name}/>})  
    }

    render(){
        return(
            <div>
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
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

    errors.emails = validateEmails(values.emails || '');

    _.each(formFields,({name,noValueError})=>{
        if(!values[name]){
            errors[name] = noValueError
        }
    });

    return errors
}

export default reduxForm({
    validate:validate,
    form:'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);
