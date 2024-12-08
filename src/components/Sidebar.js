import React from 'react';
import { NavLink } from 'react-router-dom';
import Badge from './Badge';
import Logo from '../assets/icons/Logo.svg';
import Category from '../assets/icons/Category.svg';
import Bag from '../assets/icons/Bag.svg';
import User from '../assets/icons//User.svg';
import Folder from '../assets/icons/Folder.svg';
import Chat from '../assets/icons/Chat.svg';
import Settings from '../assets/icons/Setting.svg';
import Headphones from '../assets/icons/headphones.svg';
import Gift from '../assets/icons/gift.svg';
import Logout from '../assets/icons/Logout.svg';

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between px-4 py-5 h-full">
            <div className="flex flex-col items-center">
                <NavLink to='/'><img src={Logo} alt="Logo" className="w-10 h-10 mb-8" /></NavLink>
                <div className="nav-main-links-container grid justify-center grid-cols-[1fr] gap-1">
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link"}>
                        <img src={Category} alt="Category" className="nav-link-image"  title="Dashboard" />
                    </NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link bg-custom-primary relative" : "nav-link relative"}>
                        <img src={Bag} alt="Bag" className="nav-link-image" title="Cart" />
                        <div className="inline-block w-fit h-fit absolute top-0 right-0">
                            <Badge content={3} />
                        </div>
                    </NavLink>
                    <NavLink to="/user" className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link"}>
                        <img src={User} alt="User" className="nav-link-image" title="User" />
                    </NavLink>
                    <NavLink to="/inventory" className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link"}>
                        <img src={Folder} alt="Folder" className="nav-link-image" title="Inventory" />
                    </NavLink>
                    <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link bg-custom-primary relative" : "nav-link relative"}>
                        <img src={Chat} alt="Chat" className="nav-link-image" title="Messages" />
                        <div className="inline-block w-fit h-fit absolute top-0 right-0">
                            <Badge content={16} />
                        </div>
                    </NavLink>
                    <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link"}>
                        <img src={Settings} alt="Settings" className="nav-link-image" title="Settings" />
                    </NavLink>
                </div>
            </div>
            <div className="nav-bottom-links-container grid justify-center grid-cols-[1fr]">
                <div className="nav-link bg-gray-200">
                    <img src={Headphones} alt="Headphones" className="nav-link-image" />
                </div>
                <NavLink to="/gifts" className={({ isActive }) => isActive ? "nav-link bg-custom-primary mt-3 mb-9" : "nav-link bg-amber-100 mt-3 mb-9"}>
                    <img src={Gift} alt="Gift" className="nav-link-image" title="Gifts" />
                </NavLink>
                <div className="nav-link">
                    <img src={Logout} alt="Logout" className="nav-link-image" title="Logout" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
