import React, {DetailsHTMLAttributes, FC, FormEvent, FormEventHandler, ReactNode} from 'react';

interface FormProps {
    children: ReactNode | ReactNode[],
    classes?:string,
    onSubmit?: FormEventHandler<HTMLFormElement>
}

const Form:FC<FormProps> = ({children,classes,onSubmit}) => {
    return (
        <form

            onSubmit={onSubmit}
            className={`${classes ? classes : ''} flex flex-col gap-[10px]`}
        >
            {children}
        </form>
    );
};

export default Form;