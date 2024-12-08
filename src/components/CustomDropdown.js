import React, { useState, useRef, useEffect } from 'react';
import ArrowDown from '../assets/icons/DownArrow.svg';

const CustomDropdown = ({ selectedOption, handleOptionClick, placeholder = "", options = [], dropdownStyles = { bgColor: 'bg-white', textColor: 'text-black' } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const optionsRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const onOptionClick = (option) => {
        handleOptionClick(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full">
            <div ref={optionsRef} className="relative">
                <button onClick={toggleDropdown} className={`block w-full text-left ${dropdownStyles}`} >
                    {selectedOption.label?.length > 0 ? selectedOption.label : placeholder}
                    <img src={ArrowDown} alt="Arrow Down" className="absolute right-1 top-2 pointer-events-none" />
                </button>
                {isOpen && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                        <div className="py-1">
                            {options.map((option) => (
                                <div key={option.value} onClick={() => onOptionClick(option)}
                                    className="px-2 py-1 hover:bg-gray-200 cursor-pointer text-sm" >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CustomDropdown