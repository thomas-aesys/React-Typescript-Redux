import React from 'react'
import './button.css'

interface Props {
    onClick:()=> void
}

const Button:React.FC<Props> = ({ onClick, children }) => {
    return (
        <div className="container_button">
            <button className="button" onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;