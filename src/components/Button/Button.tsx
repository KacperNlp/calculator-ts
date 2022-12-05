import React from 'react';

import './Button.scss';

interface ButtonInterface {
    text: string,
    type: string,
    value: string,
    onClick: (value: string, type: string | null) => void;
}

const Button: React.FC<ButtonInterface> = ({text, type, value, onClick}) => {
    const onButtonClick = () => onClick(value, type);

    return ( 
        <button className="button" onClick={onButtonClick}>{text}</button>
     );
}
 
export default Button;