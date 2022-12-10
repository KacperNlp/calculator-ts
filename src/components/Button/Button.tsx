import React from 'react';

import './Button.scss';

interface ButtonInterface {
    text: string,
    type: string,
    value: string,
    onClick: (value: string, type: string | null, symbol: string) => void;
}

const Button: React.FC<ButtonInterface> = ({text, type, value, onClick}) => {
    const onButtonClick = () => onClick(value, type, text);

    return ( 
        <button className="button" onClick={onButtonClick}>{text}</button>
     );
}
 
export default Button;