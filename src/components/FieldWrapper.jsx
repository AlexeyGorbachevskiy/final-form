import React from 'react'
import PropTypes from "prop-types";
import {Input} from "./Input";
import {Field} from "react-final-form";

const classNames = require('classnames');

const required = value => (value ? null : '*');

export const FieldWrapper = ({id, title, isRequired, section}) => {

    return (
        <Field
            name={`${section}.${title}`}
            validate={isRequired && required}
            subscription={{
                value: true,
                active: true,
                error: true,
                touched: true
            }}
        >
            {({input, meta}) => {
                const inputClass = classNames({
                    form__input: true,
                    form__input_active: meta.active,
                    form__input_error: meta.error && meta.touched,
                    form__input_first: id % 4 === 0 && !title.includes('general'),
                    form__input_inline: true,
                });
                const labelClass = classNames({
                    form__label: true,
                    form__label_error: meta.error && meta.touched,
                    form__label_active: meta.active,
                });
                const inlineIdsConfig = [2, 3, 6, 7, 10, 11];
                const inputWrapperClass = classNames({
                    form__inputWrapper: true,
                    form__inputWrapper_inline: (inlineIdsConfig.includes(id))
                });
                return (
                    <>
                        <Input
                            id={id}
                            placeholder='placeholder'
                            type='text'
                            wrapperClassName={inputWrapperClass}
                            className={inputClass}
                            labelClass={labelClass}
                            title={title}
                            input={input}
                            meta={meta}
                        />
                    </>
                )
            }}
        </Field>
    )
}

FieldWrapper.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    isRequired: PropTypes.bool,
    section: PropTypes.string,
};
