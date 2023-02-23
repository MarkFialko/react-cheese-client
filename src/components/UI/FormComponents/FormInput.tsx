import React from 'react';
import Input, {InputProps} from "../Input/Input";
import {DeepMap, FieldError, FieldValues, Path, RegisterOptions, UseFormRegister} from "react-hook-form";
import {ErrorMessage} from '@hookform/error-message';
import {get} from 'lodash'

export interface FormInputProps<TFormValues extends FieldValues> extends Omit<InputProps, "name"> {
    label?: string,
    name: Path<TFormValues>,
    register?: UseFormRegister<TFormValues>,
    rules?: RegisterOptions,
    errors?: Partial<DeepMap<TFormValues, FieldError>>,
    classes?: string,

}

const FormInput = <TFormValues extends Record<string, unknown>>({
                                                                    label,
                                                                    name,
                                                                    register,
                                                                    rules,
                                                                    errors, classes,
                                                                    ...props
                                                                }: FormInputProps<TFormValues>) => {
    const errorMessages = get(errors, name);
    const hasError = !!(errors && errorMessages);
    return (
        <div className={`flex  w-full flex-col gap-[5px] text-[16px] items-start`}>
            {label && <label className={` flex  text-dark`}>{label}</label>}
            <Input
                classes={classes}
                name={name}
                {...(register && register(name, rules))}
                {...props}
                error={hasError}
            />
            {errors &&
                <ErrorMessage
                    errors={errors}
                    name={name as any}
                    render={({message}) => (
                        <p className="flex items-center  text-warning">
                            {message}
                        </p>
                    )}
                />
            }
        </div>
    );
};

export default FormInput;