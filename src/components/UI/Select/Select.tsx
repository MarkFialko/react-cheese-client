import React, {useState} from 'react';
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Listbox, Transition} from "@headlessui/react";
import {MdKeyboardArrowDown} from "react-icons/md";

type IOption = {
    value: string,
    name: string
}

type SelectProps<TFormValues extends FieldValues> = {
    disabled?: boolean
    options: IOption[]
    label?: string
} & UseControllerProps<TFormValues>

const Select = <TFormValues extends Record<string, unknown>>({options,disabled, label, ...props}: SelectProps<TFormValues>) => {
    const [selected, setSelected] = useState(options[0])

    const {
        field: {value, onChange}
    } = useController(props);

    return (
        <div className={`w-full`}>
            {label && <div
                className={`flex text-dark`}
            >{label}</div>}
            <Listbox
                value={value}
                onChange={onChange}
                name={props.name}
            >
                {({open}) => (
                    <div className="relative mt-1">
                        <Listbox.Button className={`
                     w-full ${disabled ? 'border-orange cursor-not-allowed' : 'border-lightGray'} border rounded-[6px] justify-between items-center flex px-4 py-3 w-full `}>
                            <span className="block truncate">{value as string}</span>
                            {!disabled &&  <MdKeyboardArrowDown size={25}
                                                 className={`${open ? 'rotate-180' : 'rotate-0'} duration-500`}/>}
                        </Listbox.Button>
                        <Transition
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options
                                className="absolute shadow-md mt-1 max-h-60 w-full overflow-auto rounded-[6px] bg-white focus:outline-none">
                                {options.map((option, optionId) => (
                                    <Listbox.Option
                                        onClick={() => setSelected(option)}
                                        key={optionId}
                                        className={({active, selected}) =>
                                            `cursor-pointer select-none ${optionId !== options.length - 1 ? 'border-b border-b-lightGray' : ''}  duration-500 flex px-4 py-3  ${
                                                active ? 'bg-orangeSelected text-orange' : ''}
                                            ${selected ? 'bg-orangeSelected text-orange border-none' : ''}
                                        }`
                                        }
                                        value={option.name}
                                    >
                                        <span>{option.name}</span>
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                )}
            </Listbox>
        </div>

    )
}

export default Select;