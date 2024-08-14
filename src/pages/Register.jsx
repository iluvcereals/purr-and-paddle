import { FormInput } from '../components';
import { Form, Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../customUrl';

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const { usernameAttempt, passwordAttempt } = data;

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{4,}$/;

    if (!usernameRegex.test(usernameAttempt)) {
        toast.error('Username can only contain letters and digits.');
        return null;
    }

    if (!passwordRegex.test(passwordAttempt)) {
        toast.error(
            'Password must be at least 4 characters long, contain at least one letter, and at least one digit.',
        );
        return null;
    }

    try {
        const res = await customFetch.post('/auth/signup', data);
        toast.success('account created successfully');
        return redirect('/login');
    } catch (error) {
        const errorMessage =
            error?.response?.data?.error?.message || 'Account already exist or credentials are incorrect';
        toast.error(errorMessage);
        return null;
    }
}

function Register() {
    return (
        <section className="h-screen grid place-items-center bg-slate-100">
            <div className="bg-white hover:shadow-2xl transition-shadow ease-in-out duration-500 border-solid border-2 border-black p-8 w-96 min-h-[28rem] rounded-md">
                <h1 className="text-center m-4 text-4xl">Register</h1>
                <Form className="mt-8" method="post">
                    <FormInput type="text" label="username" name="usernameAttempt" />
                    <FormInput type="password" label="password" name="passwordAttempt" />
                    <div className="mt-5">
                        <button
                            type="submit"
                            className="border-solid border-2 border-black w-full h-10 rounded-md bg-black text-white hover:bg-gray-700 ease-in transition-colors duration-300"
                        >
                            Register
                        </button>
                    </div>
                    <div className="m-4 text-center">
                        <p>
                            Already a member?
                            <span className="ml-1">
                                <Link to="/login" className="text-pink-600 hover:text-pink-700">
                                    Login
                                </Link>
                            </span>
                        </p>
                    </div>
                </Form>
            </div>
        </section>
    );
}

export default Register;
