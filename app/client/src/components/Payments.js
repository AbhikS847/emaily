import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends React.Component{
    render(){

        return(
            <div>
            <StripeCheckout
            name="Emaily"
            description="Five for five email credits"
            amount={500}
            token={token=>{this.props.handleToken(token);}}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
             >
                 <button className="btn">Add credits</button>
             </StripeCheckout>
            </div>
        )
    }
}

export default connect(null,actions)(Payments);