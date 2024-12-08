import React from 'react';
import Triangle from '../assets/icons/Triangle.svg';
import Date from '../assets/icons/Calendar.svg';
import Clock from '../assets/icons/Clock.svg';

const CustomInput = ({ placeholder = "", type = "text" }) => {
    if (type === "number") {
        return (
            <div className="relative flex items-center">
                <input type={type} placeholder={placeholder}
                    className="outline-0 py-2 px-4 bg-body text-gray-600 border-0 w-full rounded-md" />
                <div className="inline-flex flex-col justify-around w-fit min-w-6 absolute right-0 h-full">
                    <div className="bg-gray-200 py-1 px-2 rounded-sm">
                        <img src={Triangle} alt="Triangle" className="h-2" />
                    </div>
                    <div className="bg-gray-200 py-1 px-2 rounded-sm">
                        <img src={Triangle} alt="Triangle" className="h-2 rotate-180" />
                    </div>
                </div>
            </div>
        )
    }
    else if (type === "date" || type === "time") {
        return (
            <div className="relative flex items-center">
                <input type="text" placeholder={placeholder} className="outline-0 py-2 pl-8 pr-4 bg-body text-gray-600 border-0 w-full rounded-md" />
                <img src={type === "date" ? Date : Clock} alt={type === "date" ? "Calender" : "Clock"} className="absolute left-3 h-4" />
            </div>
        )
    }
    return <input type={type} placeholder={placeholder} className="outline-0 py-2 px-4 bg-body text-gray-600 border-0 w-full rounded-md" />
}

export default CustomInput