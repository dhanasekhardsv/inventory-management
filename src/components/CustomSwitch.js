import React from 'react'

const CustomSwitch = ({isChecked, handleToggleSwitch}) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={isChecked} onChange={handleToggleSwitch} />
            <div className="w-11 h-6 bg-body peer-focus:outline-none peer-focus:ring-0 rounded-full peer dark:bg-body peer-checked:bg-blue-200 transition-all duration-200"></div>
            <span className="absolute left-1 top-1 w-4 h-4 bg-gray-400 rounded-full transition-transform duration-200 transform peer-checked:translate-x-5 peer-checked:bg-blue-500"></span>
        </label>
    )
}

export default CustomSwitch