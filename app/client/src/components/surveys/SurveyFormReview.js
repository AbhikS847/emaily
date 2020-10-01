import React from 'react';
import {connect} from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';

const SurveyFormReview = ({onCancel,formValues,submitSurvey}) =>{

    const reviewFields = _.map(formFields,({name,label})=>{
        return(<div key={name}>
            <label>{label}</label>
            <div>
                {formValues[name]}
            </div>
        </div>)
    });

    return(
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button className="yellow white-text darken-3 btn-flat" onClick={onCancel}>Back</button>
            <button className="green white-text btn-flat right" onClick={()=>submitSurvey(formValues)}><i className="material-icons right">email</i>Send survey</button>
        </div>
    )
}

function mapStatetoProps(state){
    return {
        formValues:state.form.surveyForm.values
    }
}

export default connect(mapStatetoProps,actions) (SurveyFormReview);