import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TestLayout } from './pages';
const router = createBrowserRouter([
    {
        path: '/',
        element: <TestLayout />,
        children: [
            // {
            //     index: true,
            //     element: <Test />,
            // },
            // {
            //     path: 'browse-pets',
            //     element: <Bar />,
            // },
            // {
            //     path: 'find-pet',
            //     element: <Bar />,
            // },
            // {
            //     path: 'dog-care',
            //     element: <Bar />,
            // },
            // {
            //     path: 'cat-care',
            //     element: <Bar />,
            // },
            // {
            //     path: 'give-pet',
            //     element: <Bar />,
            // },
            // {
            //     path: 'contact',
            //     element: <Bar />,
            // },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
