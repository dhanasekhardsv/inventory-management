import React, { useContext, useState } from 'react'
import CustomDropdown from './CustomDropdown';
import CustomBreadcrumb from './CustomBreadcrumb';
import { headerDropdownOptions } from '../utils/services';
import Notification from '../assets/icons/Notification.svg';
import Profile from '../assets/images/profile.png';
import Logo from '../assets/icons/Logo.svg';
import Menubar from '../assets/icons/menu-bar.svg';
import MobileMenuDropdown from './MobileMenuDropdown';
import { PathsContext } from '../utils/PathsContext';

const Header = () => {
    const { paths } = useContext(PathsContext);
    const [selectedOption, setSelectedOption] = useState({ value: "nanny-shop", label: "Nanny's Shop" });
    const [menuOpen, setMenuOpen] = useState(false);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <div className="sticky top-0 bg-white z-10">
            <div className="relative">
                <div className="flex justify-between items-center p-3">
                    <h2 className="text-xl font-medium hidden sm:block">Inventory</h2>
                    <img src={Logo} alt="Logo" className="sm:hidden w-10 h-10" />
                    <div className="flex items-center ml-2">
                        <div className="hidden sm:block w-fit min-w-40">
                            <CustomDropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick} options={headerDropdownOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-amber-100 text-black" />
                        </div>
                        <div className="ml-2 h-8 w-8 flex center-x-y">
                            <img src={Notification} alt="Notification" className="h-5 w-auto cursor-pointer" title="Notifications" />
                        </div>
                        <img src={Profile} alt="Profile" className="h-8 w-auto ml-2 cursor-pointer" />
                        <img src={Menubar} alt="Menu" className="sm:hidden h-8 w-auto ml-3 cursor-pointer" title="Menu" onClick={() => setMenuOpen(true)} />
                    </div>
                </div>
                {
                    menuOpen && (
                        <MobileMenuDropdown selectedOption={selectedOption} handleOptionClick={handleOptionClick} options={headerDropdownOptions} setMenuOpen={setMenuOpen} />
                    )
                }
            </div>
            <div className="border-y-thin border-solid border-body px-3 py-1">
                <CustomBreadcrumb pathsArray={paths} />
            </div>
            <div className="sm:hidden p-3">
                <h2 className="text-xl font-medium">Inventory</h2>
            </div>
        </div>
    )
}

export default Header
