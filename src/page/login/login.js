import React, {useState} from 'react';
import {getItem} from "../../utils/localStorage";
import {notifyError, notifySuccess} from "../../utils/notification";
import {Link} from "react-router-dom";

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        try {
            event.preventDefault();
            const Password = getItem(email);
            console.log(localStorage.getItem(email));
            if (Password === password) {
                notifySuccess("Login successful")
                console.log("Login successful")
                setTimeout(()=>{
                    window.location.href = "/";
                }, 500);
            } else {
                console.log("Password: ", Password)
                console.log("password: ", password)
                notifyError("Password is incorrect")
                console.log("Password is incorrect")
            }
        } catch (e) {
            if (e.message === "Email does not exist") {
                notifyError("Email does not exist")
            }
            console.log(e);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true"/>

                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-6">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Email address"
                                   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password"
                                   required
                                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Password"
                                   onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                    </div>
                    <div>
                        <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sign in
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-sm text-gray-600 text-center">Don't have an account? </h1>
                        <Link to="/signup" className="text-sm text-indigo-600 hover:text-indigo-500">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
