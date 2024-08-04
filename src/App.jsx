import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, Landing, BrowsePets, FindPet, DogCare, CatCare, GivePet, ContactPage } from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            {
                path: 'find-pet',
                element: <FindPet />,
            },
            {
                path: 'dog-care',
                element: <DogCare />,
            },
            {
                path: 'cat-care',
                element: <CatCare />,
            },
            {
                path: 'give-pet',
                element: <GivePet />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />;
            <ToastContainer theme="light" position="top-right" pauseOnFocusLoss={false} limit={1} />
        </>
    );
}

export default App;
