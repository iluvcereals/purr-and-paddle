import { FormInput } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../customUrl';
import { loginUser } from '../features/userSlice';

export const action =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log(data);
        try {
            const res = await customFetch.post('/auth/signin/', data);
            store.dispatch(loginUser({ username: res.data.username }));
            toast.success('logged in successfully');
            return redirect('/');
        } catch (error) {
            const errorMessage = error?.response?.data?.error?.msg || 'please double check your credentials';
            toast.error(errorMessage);
            return null;
        }
    };

function Login() {
    return (
        <section className="h-screen grid place-items-center bg-slate-100">
            <div className="bg-white hover:shadow-2xl transition-shadow ease-in-out duration-500 border-solid border-2 border-black p-8 w-96 min-h-[28rem] rounded-md">
                <h1 className="text-center m-4 text-4xl">Login</h1>
                <Form className="mt-8" method="post">
                    <FormInput type="text" label="username" name="usernameAttempt" />
                    <FormInput type="password" label="password" name="passwordAttempt" />
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="border-solid border-2 border-black w-full h-10 rounded-md bg-black text-white hover:bg-gray-700 ease-in transition-colors duration-300"
                        >
                            Login
                        </button>
                    </div>
                    <div className="m-4 text-center">
                        <p>
                            Not a member?
                            <span className="ml-1">
                                <Link to="/signup" className="text-pink-600 hover:text-pink-700">
                                    Register
                                </Link>
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default Login;
