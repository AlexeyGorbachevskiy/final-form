import React from 'react'
import PropTypes from "prop-types";

export const User = ({color, opacity}) =>(
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.41665 8.41667C5.599 8.41667 4.125 6.94267 4.125 5.12502V4.4667C4.125 2.64905 5.599 1.17505 7.41665 1.17505C9.23429 1.17505 10.7083 2.64905 10.7083 4.4667V5.12502C10.7083 6.94267 9.23429 8.41667 7.41665 8.41667Z" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 14.2811C14 13.0961 13.2119 12.054 12.0684 11.7426C10.8215 11.4023 9.11911 11.05 7.41667 11.05C5.71423 11.05 4.01179 11.4023 2.76491 11.7426C1.62139 12.054 0.833374 13.0961 0.833374 14.2811V15.6584H14V14.2811Z" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

User.propTypes = {
    color: PropTypes.string,
    opacity: PropTypes.string,
};
