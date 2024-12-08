import React, { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { PathsContext } from '../utils/PathsContext';

const RootLayout = () => {
    const { setPaths } = useContext(PathsContext);
    useEffect(() => {
        setPaths([]);
    }, [setPaths]);
    return (
        <div className="root-container h-screen max-w-large-desktop mx-auto">
            <div className="grid sm:grid-cols-[auto_1fr] h-full">
                <aside className="sidebar-container hidden sm:block">
                    <Sidebar />
                </aside>
                <main className="main-container grid grid-rows-[auto_1fr]">
                    <Header />
                    <div className="px-3 py-5 bg-body">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default RootLayout