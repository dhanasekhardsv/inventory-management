import { RouterProvider } from 'react-router-dom';
import { appRouter } from './utils/routing';
import PathsProvider from './utils/PathsProvider';
import './App.css';

function App() {
  return (
    <PathsProvider>
      <RouterProvider router={appRouter} />
    </PathsProvider>
  );
}

export default App;