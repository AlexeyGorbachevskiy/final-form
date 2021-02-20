import React from 'react'
import '../assets/styles/components/_section.scss';
import PropTypes from "prop-types";

export const CloseButton = ({type, disabled, className, onClick}) => (
    <button type={type} disabled={disabled} className={className} onClick={onClick}>
        <span className='cross'/>
    </button>
)

CloseButton.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
};
