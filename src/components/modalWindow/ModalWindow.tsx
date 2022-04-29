import React from 'react'
import './ModalWindow.scss'

interface ModalWindowType {
    modalActive: boolean
    setModalActive: (_: boolean) => void
    children: any
}

export const ModalWindow: React.FC<ModalWindowType> =
    ({ children, modalActive, setModalActive }) => {
        return (
            <div className={modalActive ? 'modal active' : 'modal'}
                onClick={() => setModalActive(false)}>
                <div onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        )
    }