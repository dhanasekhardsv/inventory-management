import React from 'react'
import { useNavigate } from 'react-router-dom';
import { generateInventories, inventoryItemsHeaders, options } from '../utils/services';
import CustomDropdown from './CustomDropdown';
import Sort from '../assets/icons/sort.svg';

const data = generateInventories(10);

const InventoriesTable = () => {
    const navigate = useNavigate();

    const handleOptionClick = () => { }

    return (
        <div className="overflow-x-auto">
            <div className="min-w-5xl">
                <table className="min-w-full border-x-0 border-y-thin border-body">
                    <thead>
                        <tr className="border-x-0 border-t-0 border-b-thin border-body">
                            {
                                inventoryItemsHeaders.map(item => {
                                    if (item.col === 'select') {
                                        return (
                                            <th key={item.col} className="py-2 pr-2 text-left">
                                                <input type="checkbox" name="select-all" id="select-all" className="h-5 w-5 rounded-md border-gray-200 cursor-pointer" />
                                            </th>
                                        )
                                    }
                                    else if (item.col === 'prodImage') {
                                        return <th key={item.col} className="table-header"></th>
                                    }
                                    else {
                                        return (
                                            <th key={item.col} className="table-header">
                                                <div className={`flex gap-1 items-center ${item.align === 'left' ? '' : 'justify-end'}`}>
                                                    <span className="table-header-label">{item.label}</span>
                                                    <img src={Sort} alt="Sort" />
                                                </div>
                                            </th>
                                        )
                                    }
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((row, index) => (
                                <tr key={index} className="border-0">
                                    {
                                        Object.keys(row).map((item, j) => {
                                            if (item === 'select') {
                                                return (
                                                    <td key={j} className="py-2 pr-3">
                                                        <input type="checkbox" className="h-5 w-5 rounded-md border-gray-200 cursor-pointer" />
                                                    </td>
                                                )
                                            }
                                            else if (item === 'prodImage') {
                                                return (
                                                    <td key={j} className="px-3 py-2">
                                                        <img src={row.prodImage} alt="ProdImage" className="h-8" />
                                                    </td>
                                                )
                                            }
                                            else if (item === 'prodName') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span className="cursor-pointer" onClick={() => navigate("/inventory/1")}>{row.prodName}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'category') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span>{row.category}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'unitPrice') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500 text-right">
                                                        <span>{row.unitPrice}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'inStock') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span className={`${isNaN(row.inStock) ? 'text-gray-400' : ''}`}>{row.inStock}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'discount') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500 text-right">
                                                        <span>{row.discount}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'totalPrice') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500 text-right">
                                                        <span>{row.totalPrice}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'action') {
                                                return (
                                                    <td key={j} className="px-3 py-2">
                                                        <div className="min-w-24">
                                                            <CustomDropdown selectedOption={{ value: row.action, label: row.action === 'published' ? 'Publish' : 'Unpublish' }}
                                                                handleOptionClick={(handleOptionClick)} options={options}
                                                                dropdownStyles="min-h-8 py-1 px-2 rounded-md text-sm border-0 bg-gray-200 text-gray-400" />
                                                        </div>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'status') {
                                                return (
                                                    <td key={j} className="px-3 py-2">
                                                        {
                                                            row.status === 'published' ? (
                                                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">Published</span>
                                                            ) : (
                                                                <span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-sm">Unpublished</span>
                                                            )
                                                        }
                                                    </td>
                                                )
                                            }
                                            return (
                                                <td key={j} className="px-3 py-2"></td>
                                            )
                                        })
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default InventoriesTable