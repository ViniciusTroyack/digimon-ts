import React, { ReactNode } from 'react'
import { ButtonStyled } from './styles'

interface IButtonProps {
    deleted?: boolean;
    children: ReactNode;
    onClick: () => void;
}

export const Button = ({deleted= false, children, onClick}: IButtonProps) => {
    return (
        <div>
            <ButtonStyled isDeleted={deleted} onClick={onClick}>
                {children}
            </ButtonStyled>            
        </div>
    )
}
