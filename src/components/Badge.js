import React from 'react'

const Badge = ({ content }) => {
    return (
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 ">
            <span className="text-xs">{content}</span>
        </div>
    )
}

export default Badge