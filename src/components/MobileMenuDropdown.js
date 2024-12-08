import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CustomDropdown from './CustomDropdown';
import Badge from './Badge';
import CloseRounded from '../assets/icons/close-rounded.svg';
import Category from '../assets/icons/Category.svg';
import Bag from '../assets/icons/Bag.svg';
import User from '../assets/icons//User.svg';
import Folder from '../assets/icons/Folder.svg';
import Chat from '../assets/icons/Chat.svg';
import Settings from '../assets/icons/Setting.svg';
import Headphones from '../assets/icons/headphones.svg';
import Gift from '../assets/icons/gift.svg';
import Logout from '../assets/icons/Logout.svg';

const MobileMenuDropdown = ({ selectedOption, handleOptionClick, options, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className="menu-options-container sm:hidden absolute z-50 top-0 h-screen w-full bg-faded-bg grid grid-rows-[auto_1fr]">
            <div className="flex justify-center mb-2 p-3">
                <img src={CloseRounded} alt="Close" className="h-9 w-auto ml-3 cursor-pointer" title="Close" onClick={() => setMenuOpen(false)} />
            </div>
            <div className="relative bg-blue-50 px-3 py-5">
                <div className='menu-category'>
                    <CustomDropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick} options={options}
                        dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-amber-100 text-black" />
                </div>
                <div className='menu-category'>
                    <NavLink to='/dashboard' className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link"}>
                        <img src={Category} alt="Category" className="nav-link-image" title="Dashboard" />
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
                <div className='menu-category'>
                    <div className="nav-link bg-gray-200">
                        <img src={Headphones} alt="Headphones" className="nav-link-image" />
                    </div>
                    <NavLink to="/gifts" className={({ isActive }) => isActive ? "nav-link bg-custom-primary" : "nav-link bg-amber-100"}>
                        <img src={Gift} alt="Gift" className="nav-link-image" title="Gifts" />
                    </NavLink>
                </div>
                <div className='menu-category'>
                    <div className="nav-link">
                        <img src={Logout} alt="Logout" className="nav-link-image" title="Logout" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileMenuDropdown