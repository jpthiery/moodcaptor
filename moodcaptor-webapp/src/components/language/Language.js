import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";

import Typography from "@material-ui/core/Typography";

const Language = (props) => {

    const {initialLanguage, displayLabel = false} = props
    const {flipLanguage} = props

    const [flag, setFlag] = useState(initialLanguage.flag)
    const [language, setLanguage] = useState(initialLanguage.language)

    useEffect(() => {
        setFlag(initialLanguage.flag)
        setLanguage(initialLanguage.language)
    }, [initialLanguage])

    const flip = () => {
        const language = flipLanguage();
        setFlag(language.flag)
        setLanguage(language.language)
    }

    let contentValue = `${flag}`
    if (displayLabel) {
        contentValue = `${flag} - ${language}`
    }

    return (<Typography
        variant={"h5"}
        onClick={e => flip()}>
        {contentValue}
    </Typography>)
}

export default Language

Language.propTypes = {
    initialLanguage: PropTypes.shape({
        language: PropTypes.string.isRequired,
        flag: PropTypes.string.isRequired
    }),
    displayLabel: PropTypes.bool,
    flipLanguage: PropTypes.func.isRequired
}