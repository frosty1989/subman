import React from "react";
import PropTypes from 'prop-types';

function WelcomeFunction () {

    return <h1>Welcome in Subman </h1>;

}

function WelcomeFunctionProps (props) {

    return <h1>Welcome in Subman {props.name}</h1>;

}

class WelcomeClass extends React.Component {

    render(props) {

        return <h1>Welcome class.</h1>;

    }

}

WelcomeClass.PropTypes = {

    name: PropTypes.string                            

}

export default WelcomeFunction;

export {WelcomeFunction, WelcomeClass, WelcomeFunctionProps};