import React from 'react';

import './Button.scss';

interface ButtonInterface {
    text: string,
    value: number,
    onClick: (value: number) => void;
}

const Button: React.FC<ButtonInterface> = ({text, value, onClick}) => {
    const onButtonClick = () => onClick(value);

    return ( 
        <button className="button" onClick={onButtonClick}>{text}</button>
     );
}
 
export default Button;