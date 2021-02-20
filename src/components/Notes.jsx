import React from 'react'
import PropTypes from "prop-types";

export const Notes = ({color, opacity}) =>(
    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.15625 9.37036H10.4688" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.15625 12.7H10.4688" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.89063 3C8.89063 2.12835 8.18415 1.42188 7.3125 1.42188C6.44085 1.42188 5.73438 2.12835 5.73438 3H4.15625V5.10417H10.4688V3H8.89063Z" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5729 3.52612H13.625V17.2032H1V3.52612H2.05208" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

Notes.propTypes = {
    color: PropTypes.string,
    opacity: PropTypes.string,
};
