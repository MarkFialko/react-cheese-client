import React, {FC, forwardRef, InputHTMLAttributes} from 'react';


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean,
    classes?: string
}

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
                                                                            error,
                                                                            classes,
                                                                            placeholder,
                                                                            ...props
                                                                        }, ref) => {

    return (
        <input
            className={`${classes}  flex px-4 py-3 w-full border focus:placeholder:opacity-0 ${error ? 'border-warning' : 'border-lightGray'} rounded-[6px] outline-none`}
            {...props}
            placeholder={placeholder}
            ref={ref}
        />
    );
});

export default Input;