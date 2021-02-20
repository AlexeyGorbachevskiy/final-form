import React from 'react'
import PropTypes from "prop-types";

export const Bell = ({color, opacity}) =>(
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.48485 13.9319C9.48485 15.1039 8.58864 16.0001 7.41668 16.0001C6.24471 16.0001 5.3485 15.1039 5.3485 13.9319M12.2424 9.10619C12.2424 7.38271 12.2424 5.65923 12.2424 5.65923C12.2424 2.97061 10.1053 0.833496 7.41668 0.833496C4.72805 0.833496 2.59094 2.97061 2.59094 5.65923C2.59094 5.65923 2.59094 7.38271 2.59094 9.10619C2.59094 11.8638 1.21216 13.9319 1.21216 13.9319H13.6212C13.6212 13.9319 12.2424 11.8638 12.2424 9.10619Z" stroke={color || "#2D4379"} strokeOpacity={opacity || "0.48"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

Bell.propTypes = {
    color: PropTypes.string,
    opacity: PropTypes.string,
};
