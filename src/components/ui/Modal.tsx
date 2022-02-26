import React, { ReactNode } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai"
import "./assets/modal.scss"


interface Props {
    readonly show: boolean
    readonly onClose: () => void
    readonly children: ReactNode
}

export function Modal({ show, onClose, children }: Props) {

    return (
        <div className={`modal ${show && "show"}`} >
            <div className="modal_overlay" onClick={() => onClose()} />
            <div className="modal_content">
                <div className="modal_close-btn" onClick={() => onClose()}> <AiOutlineCloseCircle /></div>
                <div className="modal_content-body">
                    {children}
                </div>
            </div>
        </div>
    );
}

