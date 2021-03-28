import React from "react";
import {connect} from "react-redux";
import {redirectTo} from "../../redux/selectors";
import {navigateReset} from "../../redux/nav.actions";

import {Redirect} from "react-router-dom";

const RedirectTo = ({path}) => {

    if(path !== ''){
        return (<Redirect to={path}/>)
    }
    return (
        ""
    )

}


export const mapStateToProps = state => {
    const path = redirectTo(state)
    return {
        path
    }
}

export default connect(
    mapStateToProps,
    {navigateReset}
)(RedirectTo)