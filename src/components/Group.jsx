import React from 'react'
import PropTypes from "prop-types";
import {FieldWrapper} from "./FieldWrapper";


export const Group = ({defaultGroupState, config, section}) => {

    const titles = Object.keys(defaultGroupState[section]).map((el) => {
        if (el === 'general') {
            return Object.keys(defaultGroupState[section].general).map(el => `general.${el}`)
        }
        return `${el}`
    }).flat();

    return (
        <>
            {
                titles.map((el, index) => {
                    return (
                        <FieldWrapper id={index} section={section} title={el} key={index}
                                      isRequired={config.requiredFields && config.requiredFields.includes(el)}/>
                    )
                })
            }
        </>
    )

}

Group.propTypes = {
    defaultGroupState: PropTypes.object,
    config: PropTypes.object,
    section: PropTypes.string,
};
