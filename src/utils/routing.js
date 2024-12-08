import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Inventory from '../pages/inventory/Inventory';
import NewInventory from '../pages/inventory/NewInventory';
import ViewInventory from '../pages/inventory/ViewInventory';
import Dashboard from '../pages/dashboard/Dashboard';
import Cart from '../pages/cart/Cart';
import User from '../pages/user/User';
import Messages from '../pages/messages/Messages';
import Settings from '../pages/settings/Settings';
import Gifts from '../pages/gifts/Gifts';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'user',
                element: <User />
            },
            {
                path: 'inventory',
                element: <Inventory />,
            },
            {
                path: 'inventory/new-inventory',
                element: <NewInventory />
            },
            {
                path: 'inventory/:inventoryId',
                element: <ViewInventory />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'settings',
                element: <Settings />
            },
            {
                path: 'gifts',
                element: <Gifts />
            },
        ]
    },
]);