import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from '../../components/CustomDropdown';
import InventoriesTable from '../../components/InventoriesTable';
import { durationOptions, actions, itemsPerPageOptions, pagesOptions, inventorySummaryPaths } from '../../utils/services';
import Add from '../../assets/icons/plus-white.svg';
import Folder from '../../assets/icons/Folder-white.svg';
import User from '../../assets/icons/User-black.svg';
import Search from '../../assets/icons/Search.svg';
import Filter from '../../assets/icons/Filter.svg';
import Calender from '../../assets/icons/Calendar.svg';
import Send from '../../assets/icons/Send.svg';
import RightArrow from '../../assets/icons/ArrowRight.svg';
import LeftArrow from '../../assets/icons/ArrowLeft.svg';
import { PathsContext } from '../../utils/PathsContext';

const Inventory = () => {
    const navigate = useNavigate();
    const { setPaths } = useContext(PathsContext);
    const [selectedDurationOption, setSelectedDurationOption] = useState({ value: 'this-week', label: 'This Week' });
    const [tableAction, setTableAction] = useState({ value: 'bulk-action', label: 'Bulk Action' });
    const [itemsCountPerPage, setItemsCountPerPage] = useState({ value: "10", label: "10" });
    const [page, setPage] = useState({ value: "1", label: "1" });
    const [searchValue, setSearchValue] = useState("");

    const handleDurationOptionClick = (duration) => {
        setSelectedDurationOption(duration);
    };
    const handleActionClick = (action) => {
        setTableAction(action);
    };
    const handleItemsCountOptionClick = (itemsCountPerPage) => {
        setItemsCountPerPage(itemsCountPerPage);
    }
    const handlePageOptionClick = (page) => {
        setPage(page);
    }

    useEffect(() => {
        setPaths(inventorySummaryPaths);
    }, [setPaths]);
    return (
        <div className="grid gap-3">    
            <div className="sm:flex justify-between center-y">
                <h3 className="mb-3 sm:mb-0">Inventory Summary</h3>
                <button type="button" className="primary-button flex center-x-y gap-1" onClick={() => navigate("/inventory/new-inventory")}>
                    <img src={Add} alt="Add" className="inline-block h-5 w-auto" />
                    <span>Add a New Product</span>
                </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
                <div className="card bg-custom-primary text-white grid gap-3">
                    <div>
                        <div className="inline-block p-2 rounded-lg bg-indigo-300">
                            <img src={Folder} alt="Folder" className="h-5 w-auto" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <label htmlFor="" className="text-sm">All Products</label>
                            <p className="text-xl">350</p>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm">Active</label>
                            <p className="flex center-y gap-2"><span className="text-xl">316</span><span className="text-sm">86%</span></p>
                        </div>
                    </div>
                </div>
                <div className="card bg-white grid gap-3">
                    <div className="flex justify-between center-y">
                        <div className="inline-block p-2 rounded-lg bg-amber-100">
                            <img src={User} alt="User" className="h-5 w-auto" />
                        </div>
                        <div className="w-fit max-w-48 min-w-32">
                            <CustomDropdown selectedOption={selectedDurationOption} handleOptionClick={handleDurationOptionClick} options={durationOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-white text-gray-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div>
                            <label htmlFor="" className="text-sm text-red-600">Expired</label>
                            <p className="text-xl">23</p>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-gray-500">Expired</label>
                            <p className="text-xl">3</p>
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm text-gray-500">1 Start Rating</label>
                            <p className="text-xl">2</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-white grid gap-3">
                <div className="lg:flex items-end justify-between">
                    <label htmlFor="">Inventory Items</label>
                    <div className="flex gap-2 flex-wrap mt-3 lg:mt-0">
                        <div className="flex w-fit center-x-y relative">
                            <input type="text" name="searchTable" id="searchTable" placeholder="Search" value={searchValue}
                                onChange={(event) => setSearchValue(event.target.value)}
                                className="py-1 pl-8 pr-2 text-sm outline-none border-thin border-solid border-gray-400 rounded-md h-full" />
                            <img src={Search} alt="Search" className="absolute left-2 h-4 w-auto" />
                        </div>
                        <button type="button" className="flex center-x-y gap-2 px-2 py-1 text-sm border-thin border-solid border-black rounded-md">
                            <img src={Filter} alt="Filter" className="inline-block h-4 w-auto" />
                            <span className="text-gray-600">Filter</span>
                        </button>
                        <button type="button" className="flex center-x-y gap-2 px-2 py-1 text-sm border-thin border-solid border-black rounded-md">
                            <img src={Calender} alt="Calender" className="inline-block h-4 w-auto" />
                            <span className="text-gray-600">Filter</span>
                        </button>
                        <button type="button" className="flex center-x-y gap-2 px-2 py-1 text-sm border-thin border-solid border-black rounded-md">
                            <img src={Send} alt="Send" className="inline-block h-4 w-auto" />
                            <span className="text-gray-600">Share</span>
                        </button>
                        <div className="w-fit max-w-48 min-w-32">
                            <CustomDropdown selectedOption={tableAction} handleOptionClick={handleActionClick} options={actions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm bg-white text-gray-600 border-thin border-solid border-black" />
                        </div>
                    </div>
                </div>
                <InventoriesTable />
                <div className="sm:flex justify-between">
                    <div className="flex gap-2 items-center mb-3 sm:mb-0">
                        <div className="w-fit min-w-14">
                            <CustomDropdown selectedOption={itemsCountPerPage} handleOptionClick={handleItemsCountOptionClick} options={itemsPerPageOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm bg-gray-200 text-gray-600 border-0 text-sm" />
                        </div>
                        <span className="text-gray-400 text-sm">Items per page</span>
                        <span className="text-sm">1-10 of 200 items</span>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-fit min-w-14">
                            <CustomDropdown selectedOption={page} handleOptionClick={handlePageOptionClick} options={pagesOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm bg-gray-200 text-gray-600 border-0 text-sm" />
                        </div>
                        <span className="text-gray-400 text-sm">of 44 pages</span>
                        <img src={LeftArrow} alt="Left Arrow" className="h-4 w-auto ml-2 cursor-pointer" />
                        <img src={RightArrow} alt="Right Arrow" className="h-4 w-auto ml-2 cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inventory