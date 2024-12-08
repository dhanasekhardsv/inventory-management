import Mobile from '../assets/images/Mobile.png';
import Shirt from '../assets/images/Shirt.png';

export const headerDropdownOptions = [
    { value: "nanny-shop", label: "Nanny's Shop" },
];
export const durationOptions = [
    { value: "this-week", label: "This Week" },
];
export const actions = [
    { value: "bulk-action", label: "Bulk Action" },
];
export const itemsPerPageOptions = [
    { value: "5", label: "5" },
    { value: "10", label: "10" },
    { value: "15", label: "15" },
];
export const pagesOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
];
export const options = [
    { value: 'published', label: 'Publish' },
    { value: 'unpublished', label: 'Unpublish' }
];
export const categoryOptions = [
    { value: 'fashion', label: 'Fashion' },
    { value: 'gadgets', label: 'Gadgets' }
];
export const orderTypes = [
    { value: 'type-1', label: 'Type 1' },
    { value: 'type-2', label: 'Type 2' }
];
export const discountTypes = [
    { value: 'discount-1', label: 'Discount 1' },
    { value: 'discount-2', label: 'Discount 2' }
];
export const fontTypes = [
    { value: 'roboto', label: 'Roboto' },
    { value: 'Times', label: 'Times' },
];
export const contentTypes = [
    { value: 'paragraph', label: 'Paragraph' },
];
export const filterOptions = [
    { value: 'all-time', label: 'All-time' }
];

export const inventorySummaryPaths = ['Inventory'];
export const newInventoryPaths = ['Inventory', 'New Inventory Item'];
export const viewInventoryPaths = ['Inventory', 'View Inventory'];

export const inventoryItemsHeaders = [
    {
        col: 'select',
        label: 'Select',
        align: 'left'
    },
    {
        col: 'prodImage',
        label: '',
        align: 'left'
    },
    {
        col: 'prodName',
        label: 'Product Name',
        align: 'left'
    },
    {
        col: 'category',
        label: 'Category',
        align: 'left'
    },
    {
        col: 'unitPrice',
        label: 'Unit Price',
        align: 'right'
    },
    {
        col: 'inStock',
        label: 'In Stock',
        align: 'left'
    },
    {
        col: 'discount',
        label: 'Discount',
        align: 'right'
    },
    {
        col: 'totalPrice',
        label: 'Total Value',
        align: 'right'
    },
    {
        col: 'action',
        label: 'Action',
        align: 'left'
    },
    {
        col: 'status',
        label: 'Status',
        align: 'left'
    },
];

export const productSummaryHeaders = [
    {
        col: 'select',
        label: 'Select',
        align: 'left'
    },
    {
        col: 'orderDate',
        label: 'Order Date',
        align: 'left'
    },
    {
        col: 'orderType',
        label: 'Order Type',
        align: 'left'
    },
    {
        col: 'unitPrice',
        label: 'Unit Price',
        align: 'right'
    },
    {
        col: 'quantity',
        label: 'Quantity',
        align: 'left'
    },
    {
        col: 'discount',
        label: 'Discount',
        align: 'right'
    },
    {
        col: 'totalPrice',
        label: 'Order Total',
        align: 'right'
    },
    {
        col: 'status',
        label: 'Status',
        align: 'left'
    },
];

export function generateInventories(count) {
    const prodNames = ["iPhone 13 Pro", "iPhone 12 Pro", "Polo T-Shirt"];
    const categories = ["Gadgets", "Fashion"];
    const unitPrices = ["$1,225,000.00", "$725,000.00", "$125,000.00"];
    const inStockOptions = ["8", "12", "120", "Out of Stock"];
    const discounts = ["$0.00", "$50.00"];
    const totalPrices = ["$50,000.00", "$0.00"];
    const publishStatuses = ["published", "unpublished"];

    const products = [];
    for (let i = 0; i < count; i++) {
        let prodCategory = categories[Math.floor(Math.random() * categories.length)];
        let prodAction = publishStatuses[Math.floor(Math.random() * publishStatuses.length)]
        const product = {
            select: '',
            prodImage: prodCategory === 'Gadgets' ? Mobile : Shirt,
            prodName: prodNames[Math.floor(Math.random() * prodNames.length)],
            category: prodCategory,
            unitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
            inStock: inStockOptions[Math.floor(Math.random() * inStockOptions.length)],
            discount: discounts[Math.floor(Math.random() * discounts.length)],
            totalPrice: totalPrices[Math.floor(Math.random() * totalPrices.length)],
            action: prodAction,
            status: prodAction
        };
        products.push(product);
    }

    return products;
}

export function generateOrders(count) {
    const orderDates = ["12 Aug 2022 - 12:25 am", "22 Oct 2024 - 01:40 am", "01 Jan 2021 - 09:00 am"];
    const orderTypes = ["Home Delivery", "Work Delivery"];
    const unitPrices = ["$1,225,000.00", "$725,000.00", "$125,000.00"];
    const quantities = [8, 12, 120, 11];
    const discounts = ["$0.00", "$50.00"];
    const totalPrices = ["$50,000.00", "$0.00"];
    const statuses = ["complete", "incomplete"];

    const orders = [];
    for (let i = 0; i < count; i++) {
        const order = {
            select: '',
            orderDate: orderDates[Math.floor(Math.random() * orderDates.length)],
            orderType: orderTypes[Math.floor(Math.random() * orderTypes.length)],
            unitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
            quantity: quantities[Math.floor(Math.random() * quantities.length)],
            discount: discounts[Math.floor(Math.random() * discounts.length)],
            totalPrice: totalPrices[Math.floor(Math.random() * totalPrices.length)],
            status: statuses[Math.floor(Math.random() * statuses.length)],
        };
        orders.push(order);
    }

    return orders;
}