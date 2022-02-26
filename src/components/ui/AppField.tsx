import { ErrorMessage, Field } from 'formik';
import React, { ReactNode, useState } from 'react';
import "./assets/app-field.scss"
import cx from "classnames"
import { Modal } from "./Modal";
import { BsFillExclamationTriangleFill } from "react-icons/bs"
import { BsChevronDown } from "react-icons/bs"
interface Props {
    readonly label: string
    readonly error: boolean
    readonly value?: any
    readonly children?: ReactNode
    readonly descriptionDialogText?: string
    readonly [key: string]: any
}

export function AppField({  label, label2, children, onChange, value, descriptionDialogText, error, ...props }: Props) {
    // const [value, setValue] = useState("");
    const [showDialog, setShowDialog] = useState(false);
    return (
        <>
            <div className="app-field" onChange={onChange}>
                <Field
                    
                    placeholder={() => <ErrorMessage name={props.name} />}
                    className={cx("app-field_input", { error }, { value })}  {...props}>
                    {props.as === "select" ? (
                        <>
                            <option value="" disabled />
                            {children}

                        </>
                    ) : null}
                    
                </Field>
                
                <label className="app-field_label">{label}</label>
                {error && (
                    <BsFillExclamationTriangleFill className='error-icon' style={{
                        position: "absolute",
                        top: "13px",
                        right: "14px",
                    }} color="#ff776f" />
                )}
                <span className="error-message"><ErrorMessage name={props.name} /></span>
                {descriptionDialogText && <div className={cx("what-this-is", {
                    "open": showDialog
                })} onClick={() => setShowDialog(true)}>
                    <span>?</span>
                </div>}
            </div>
            {descriptionDialogText && (
                <Modal show={showDialog} onClose={() => setShowDialog(false)}>
                    <p className="field-description">{descriptionDialogText}</p>
                </Modal>
            )}
        </>
    );
}

