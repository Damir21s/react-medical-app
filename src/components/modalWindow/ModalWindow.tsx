import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface ModalWindowType {
    modalActive: boolean
    setModalActive: (_: boolean) => void
    children: ReactNode
}

const Modal = styled.div<{ transform?: string }>`
    min-height: 100%;
    width: 100%;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({transform}) => transform};

    div {
        padding: 20px;
        border-radius: 12px;
        background-color: white;
        width: 400px;
    }

    @media (max-width: 620px) {
        div{
            width: 205px;
        }
     }
`

export const ModalWindow: React.FC<ModalWindowType> =
    ({ children, modalActive, setModalActive }) => {
        return (
            <Modal transform = {modalActive ? 'scale(1)' : 'scale(0)'}
                onClick={() => setModalActive(false)}>
                <div onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </Modal>
        )
    }