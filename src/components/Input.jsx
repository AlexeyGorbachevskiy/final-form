import React from 'react'
import PropTypes from "prop-types";
import {User} from "./User";
import '../assets/styles/components/_section.scss';

const classNames = require('classnames');

export const Input = ({id, input, meta, className, placeholder, wrapperClassName, labelClass, title}) => {
    const errorClass = classNames({
        form__input_errorText: true,
        form__input_errorText_first: id % 4 === 0 && !title.includes('general')
    });
    return (
        <div className={wrapperClassName}>
            <label className={labelClass}>{title.includes('general') ? title.slice(8) : title}</label>
            <input id={id} type="text" {...input} className={className} placeholder={placeholder}/>
            {meta.error && meta.touched && <span className={errorClass}>{meta.error}</span>}
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number,
    input: PropTypes.object,
    meta: PropTypes.object,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    labelClass: PropTypes.object,
    placeholder: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.string,
    title: PropTypes.string,

};
