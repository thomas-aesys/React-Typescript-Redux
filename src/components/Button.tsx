import React from 'react'

interface Props {
    onClick:()=> void
}

const Button:React.FC<Props> = ({ onClick, children }) => {
    return (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    )
}

export default Button;