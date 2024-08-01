import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, BrowsePets } from './pages';
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: 'browse-pets',
                element: <BrowsePets />,
            },
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
