import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
    HomeLayout,
    Landing,
    BrowsePets,
    FindPet,
    DogCare,
    CatCare,
    GivePet,
    ContactPage,
    Login,
    Register,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './store.js';

// Loaders
import { loader as givePetLoader } from './pages/GivePet';

// Action
import { action as loginAction } from './pages/Login.jsx';
import { action as registerAction } from './pages/Register.jsx';

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
                loader: givePetLoader(store),
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
    { path: '/login', element: <Login />, action: loginAction(store) },
    { path: '/signup', element: <Register />, action: registerAction },
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
