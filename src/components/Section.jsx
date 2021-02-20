import React, {useEffect, useState} from 'react'
import '../assets/styles/components/_section.scss';
import {Form, FormSpy} from 'react-final-form';
import createDecorator from 'final-form-focus';
import {Group} from './Group';
import {useLocation} from 'react-router-dom';
import {PrimaryButton} from './PrimaryButton';
import {CloseButton} from './CloseButton';

const onSubmit = async (values, form) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert(`These values ${JSON.stringify(values)} were submitted`);
    setTimeout(form.reset);
}

const focusOnError = createDecorator();
const classNames = require('classnames');


export const Section = () => {
    const {pathname} = useLocation();
    let defaultGroupState = null;
    let config = null;
    let section = null;

    switch (pathname) {
        case '/section1': {
            section = 'Section 1';
            defaultGroupState = {
                [section]: {
                    'title 1': '',
                    general: {
                        'title 2': '',
                        'title 3': '',
                        'title 4': '',
                    }
                }
            };
            config = {
                current: 2,
                min: 1,
                max: 3,
                fields: 4,
                requiredFields: ['general.title 2', 'general.title 4']
            }
            break;
        }
        case '/section2': {
            section = 'Section 2';
            defaultGroupState = {
                [section]: {
                    'title 1': '',
                    general: {
                        'title 2': '',
                        'title 3': '',
                        'title 4': '',
                    },
                    'title 5': '',
                    'title 6': '',
                    'title 7': '',
                    'title 8': '',
                }

            };
            config = {
                current: 2,
                min: 2,
                max: 4,
                fields: 8,
            }
            break;
        }
        case '/section3': {
            section = 'Section 3';
            defaultGroupState = {
                [section]: {
                    'title 1': '',
                    general: {
                        'title 2': '',
                        'title 3': '',
                        'title 4': '',
                    },
                    'title 5': '',
                    'title 6': '',
                    'title 7': '',
                    'title 8': '',
                    'title 9': '',
                    'title 10': '',
                    'title 11': '',
                    'title 12': '',
                }

            };
            config = {
                current: 2,
                min: 2,
                max: 4,
                fields: 12,
            }
            break;
        }
        default:
            alert('No groups');

    }

    const [count, setCount] = useState(config.current);
    let groups = Array(count).fill(defaultGroupState);
    const [groupsState, setGroupState] = useState(groups);

    useEffect(() => {
        groups = Array(config.current).fill(defaultGroupState);
        setGroupState(groups)
        setCount(config.current)
    }, [pathname]);


    const onRemoveGroup = (id) => {
        if (count === config.min) {
            return;
        }
        const restGroups = groupsState.filter((el, index) => index !== id);
        setCount(count - 1)
        setGroupState(restGroups)
    }

    const onAddGroup = () => {
        if (count === config.max) {
            return;
        }
        setCount(count + 1)
        setGroupState([...groupsState, defaultGroupState])
    }

    return (
        <section className='section'>
            <h1 className='section__header'>{section}</h1>
            <div className='section__body'>
                <Form
                    onSubmit={onSubmit}
                    initialValues={defaultGroupState}
                    // decorators={[focusOnError]}
                    subscription={{
                        values: true,
                        submitting: true,
                        pathname: true
                    }}
                >
                    {({handleSubmit, values, submitting, form}) => {

                        const primaryBtn = classNames({
                            'form__primary-button': true,
                            'form__primary-button_disabled': submitting,
                        })
                        const addGroupClass = classNames({
                            'form__primary-button': true,
                            'form__add-group-button': true,
                            'form__add-group-button_disabled': submitting || count === config.max,
                        });

                        return (
                            <form className='form' onSubmit={handleSubmit}>
                                {
                                    config && config.current >= config.min && config.current <= config.max &&
                                    <>
                                        {
                                            groupsState.map((el, index) => {
                                                const closeBtnClass = classNames({
                                                    'form__close-button': true,
                                                    'form__close-button_disabled': submitting || count === config.min,

                                                });
                                                return (
                                                    <div key={index} className='form__group'>
                                                        <CloseButton onClick={() => onRemoveGroup(index)}
                                                                     type='button'
                                                                     className={closeBtnClass}
                                                                     disabled={submitting || count === config.min}

                                                        />
                                                        <Group
                                                            defaultGroupState={defaultGroupState}
                                                            config={config}
                                                            section={section}
                                                        />
                                                    </div>
                                                )
                                            })
                                        }

                                        <PrimaryButton
                                            onClick={onAddGroup}
                                            className={addGroupClass}
                                            type="button"
                                            disabled={submitting}
                                        >Add
                                            group</PrimaryButton>
                                        <PrimaryButton className={primaryBtn} type='submit'
                                                       disabled={submitting}>Submit</PrimaryButton>

                                        <FormSpy>
                                            {({values}) => (
                                                <pre className='pre'>
                                                     {values && values[section] ?
                                                         JSON.stringify(values[section], null, 4)
                                                         :
                                                         JSON.stringify(values, null, 4)
                                                     }
                                                </pre>
                                            )}
                                        </FormSpy>
                                    </>
                                }

                                {
                                    config && (config.current < config.min || config.current > config.max) &&
                                    <div>
                                        {`Group count cannot be less than ${config.min} and more than ${config.max}`}
                                    </div>
                                }

                            </form>
                        )
                    }}
                </Form>

            </div>
        </section>
    )
}
