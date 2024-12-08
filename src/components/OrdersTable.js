import React from 'react'
import { generateOrders, productSummaryHeaders } from '../utils/services';
import Sort from '../assets/icons/sort.svg';

const data = generateOrders(4);

const OrdersTable = () => {
    return (
        <div className="overflow-x-auto">
            <div className="min-w-5xl">
                <table className="min-w-full border-x-0 border-y-thin border-body">
                    <thead>
                        <tr className="border-x-0 border-t-0 border-b-thin border-body">
                            {
                                productSummaryHeaders.map(item => {
                                    if (item.col === 'select') {
                                        return (
                                            <th key={item.col} className="py-2 pr-2 text-left">
                                                <input type="checkbox" name="select-all" id="select-all" className="h-5 w-5 rounded-md border-gray-200 cursor-pointer" />
                                            </th>
                                        )
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
                                            else if (item === 'orderDate') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span>{row.orderDate}</span>
                                                    </td>
                                                )
                                            }
                                            else if (item === 'orderType') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span>{row.orderType}</span>
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
                                            else if (item === 'quantity') {
                                                return (
                                                    <td key={j} className="px-3 py-2 text-gray-500">
                                                        <span>{row.quantity}</span>
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
                                            else if (item === 'status') {
                                                return (
                                                    <td key={j} className="px-3 py-2">
                                                        {
                                                            row.status === 'complete' ? (
                                                                <span className="px-2 py-1 bg-green-200 text-green-700 rounded text-sm">Completed</span>
                                                            ) : (
                                                                <span className="px-2 py-1 bg-amber-50 text-amber-600 rounded text-sm">Pending</span>
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

export default OrdersTable