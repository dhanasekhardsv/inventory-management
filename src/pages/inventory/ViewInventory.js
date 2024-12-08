import React, { useContext, useEffect, useState } from 'react';
import CustomDropdown from '../../components/CustomDropdown';
import OrdersTable from '../../components/OrdersTable';
import { actions, filterOptions, viewInventoryPaths } from '../../utils/services';
import Product from '../../assets/images/Tshirt.png';
import Add from '../../assets/icons/plus-white.svg';
import DownArrow from '../../assets/icons/ArrowDown-white.svg';
import Copy from '../../assets/icons/Copy.svg';
import PieChart from '../../assets/icons/PieChart.svg';
import Eye from '../../assets/icons/Eye.svg';
import BagBlack from '../../assets/icons/Bag-black.svg';
import Search from '../../assets/icons/Search.svg';
import Filter from '../../assets/icons/Filter.svg';
import Calender from '../../assets/icons/Calendar.svg';
import Send from '../../assets/icons/Send.svg';
import { PathsContext } from '../../utils/PathsContext';

const ViewInventory = () => {
    const { setPaths } = useContext(PathsContext);
    const [option, setOption] = useState({ value: 'all-time', label: 'All-time' });
    const [tableAction, setTableAction] = useState({ value: 'bulk-action', label: 'Bulk Action' });
    const [searchValue, setSearchValue] = useState("");

    const handleOptionClick = (opt) => {
        setOption(opt);
    }
    const handleActionClick = (action) => {
        setTableAction(action);
    };

    useEffect(() => {
        setPaths(viewInventoryPaths);
    }, [setPaths]);
    return (
        <div className="grid gap-3">
            <div className="xl:flex justify-between items-center">
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 md:gap-5">
                    <h3>Polo T-Shirt</h3>
                    <label htmlFor="">
                        Date Added&nbsp;<span className="text-gray-400">12 Sept 2022 - 12:55 pm</span>
                    </label>
                    <label htmlFor="" className="flex center-y">
                        Product URL&nbsp;<span className="text-gray-400">1nancystores.com/polot-shirt</span>&nbsp;&nbsp;
                        <img src={Copy} alt="Copy" className="inline-block h-5 w-auto cursor-pointer" />
                    </label>
                </div>
                <div className="sm:flex gap-3 mt-3 xl:mt-0">
                    <button type="button" className="dark-button flex center-x-y gap-1">
                        <span className="pr-3 border-r-thin border-gray-600 border-solid">Edit Product</span>
                        <img src={DownArrow} alt="Down Arrow" className="inline-block h-5 w-auto" />
                    </button>
                    <button type="button" className="danger-button flex center-x-y gap-1 mt-3 sm:mt-0" >
                        <img src={Add} alt="Add" className="inline-block h-5 w-auto" />
                        <span>Unpublish Product</span>
                    </button>
                </div>
            </div>
            <div className="sm:grid gap-3 xl:grid-cols-2">
                <div className="sm:grid sm:grid-cols-3 gap-3">
                    <div className="card bg-white mb-3 sm:mb-0">
                        <img src={Product} alt="Product" className="m-auto max-h-44 max-w-full" />
                    </div>
                    <div className="card bg-white mb-3 sm:mb-0 col-span-2 flex flex-col justify-between gap-7">
                        <div className="flex justify-between center-y">
                            <label htmlFor="" className="text-sm text-gray-500">
                                Last Order&nbsp;<span className="text-black">12 Sept 2022</span>
                            </label>
                            <div className="px-2 py-1 rounded-md bg-green-200 text-green-600 text-sm">
                                Published
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p className="text-sm text-gray-500">Price</p>
                                <span className="text-xl">$25,000.00</span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">In-Stock</p>
                                <span className="text-xl">20</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 gap-3">
                    <div className="card bg-white mb-3 md:mb-0 flex flex-col justify-between gap-7">
                        <div className="flex justify-between center-y">
                            <div className="p-2 rounded-md bg-blue-100">
                                <img src={PieChart} alt="Orders" className="h-4" />
                            </div>
                            <div className="w-fit max-w-48 min-w-32">
                                <CustomDropdown selectedOption={option} handleOptionClick={handleOptionClick} options={filterOptions}
                                    dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-white text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Total Orders</p>
                            <span className="text-xl">50,000</span>
                        </div>
                    </div>
                    <div className="card bg-white flex flex-col justify-between gap-7">
                        <div className="flex justify-between center-y">
                            <div className="p-2 rounded-md bg-amber-50">
                                <img src={Eye} alt="Eye" className="h-4" />
                            </div>
                            <div className="w-fit max-w-48 min-w-32">
                                <CustomDropdown selectedOption={option} handleOptionClick={handleOptionClick} options={filterOptions}
                                    dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-white text-gray-400" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <p className="text-sm text-gray-500">Views</p>
                                <span className="text-xl">1200</span>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Favorite</p>
                                <span className="text-xl">23</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-3">
                <div className="card bg-white mb-3 lg:mb-0 flex flex-col justify-between gap-7">
                    <div className="flex justify-between center-y">
                        <div className="p-2 rounded-md bg-amber-50">
                            <img src={BagBlack} alt="Bag" className="h-4" />
                        </div>
                        <div className="w-fit max-w-48 min-w-32">
                            <CustomDropdown selectedOption={option} handleOptionClick={handleOptionClick} options={filterOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-white text-gray-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <p className="text-sm text-gray-500">All Orders</p>
                            <span className="text-xl">1</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Pending</p>
                            <span className="text-xl">0</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Completed</p>
                            <span className="text-xl">1</span>
                        </div>
                    </div>
                </div>
                <div className="card bg-white mb-3 lg:mb-0 flex flex-col justify-between gap-7">
                    <div className="flex justify-between center-y">
                        <div className="p-2 rounded-md bg-amber-50">
                            <img src={BagBlack} alt="Bag" className="h-4" />
                        </div>
                        <div className="w-fit max-w-48 min-w-32">
                            <CustomDropdown selectedOption={option} handleOptionClick={handleOptionClick} options={filterOptions}
                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-white text-gray-400" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <p className="text-sm text-gray-500">Cancelled</p>
                            <span className="text-xl">0</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Returned</p>
                            <span className="text-xl">0</span>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Damaged</p>
                            <span className="text-xl">0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid gap-3 card bg-white">
                <div className="lg:flex items-end justify-between">
                    <label htmlFor="">Purchases</label>
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
                <OrdersTable />
            </div>
        </div>
    )
}

export default ViewInventory