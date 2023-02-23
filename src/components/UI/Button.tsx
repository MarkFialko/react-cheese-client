import React, {ButtonHTMLAttributes, FC} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string,
}

const Button: FC<ButtonProps> = ({children, classes, onSubmit, onClick}) => {
    return (
        <button onClick={onClick} onSubmit={onSubmit}
                className={`${classes ? classes : ''} font-bold py-3 px-3 rounded-[5px] overflow-hidden flex items-center justify-center text-white bg-orange text-[14px]`}>
            {children}
        </button>
    );
};

export default Button;