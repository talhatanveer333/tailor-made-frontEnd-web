import React, { useState, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { login } from "../auth/auth";
import authContext from "../auth/authContext";

function Login() {
  const { user, setUser } = useContext(authContext);
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(account.email, account.password);
      if (!result) return;
      // else successful auth
      const decodedUser = await jwtDecode(result.data);
      setUser(decodedUser);
      console.log(user);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  const handleChange = ({ currentTarget }) => {
    const acc = { ...account };
    acc[currentTarget.name] = currentTarget.value;
    setAccount(acc);
  };
  return (
    <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-36 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Login to your account
          </p>

          <p className="text-sm mt-4 font-medium leading-none text-gray-500">
            Dont have account?{" "}
            <Link to="/register">
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Sign up here
              </span>
            </Link>
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />

            <hr className="w-full bg-gray-400  " />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Email
              </lable>
              <input
                name="email"
                value={account.email}
                onChange={handleChange}
                autoFocus
                aria-label="enter email adress"
                role="input"
                type="email"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>
            <div className="mt-6  w-full">
              <lable className="text-sm font-medium leading-none text-gray-800">
                Password
              </lable>
              <div className="relative flex items-center justify-center">
                <input
                  name="password"
                  value={account.password}
                  onChange={handleChange}
                  aria-label="enter Password"
                  role="input"
                  type="password"
                  className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
                <div className="absolute right-0 mt-2 mr-3 cursor-pointer"></div>
              </div>
            </div>

            <div className="mt-8">
              <button
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
