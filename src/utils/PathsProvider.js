import React, { useState } from 'react'
import { PathsContext } from './PathsContext';

const PathsProvider = ({ children }) => {
    const [paths, setPaths] = useState('');
    return (
        <PathsContext.Provider value={{ paths, setPaths }}>
            {children}
        </PathsContext.Provider>
    )
}

export default PathsProvider