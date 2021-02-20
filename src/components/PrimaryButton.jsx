import React from 'react'
import PropTypes from "prop-types";

export const PrimaryButton = ({children, type, disabled, className, onClick}) => (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>{children}</button>
)

PrimaryButton.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};
