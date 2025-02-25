import React from 'react';
import './input.scss';

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    iconClass: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, iconClass }) => {
    return (
        <div className="input-field">
            <i className={`icon ${iconClass}`}></i>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default Input;