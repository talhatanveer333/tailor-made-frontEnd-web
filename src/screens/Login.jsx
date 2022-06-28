import React, { useState, useContext } from "react";
import { motion } from "framer-motion";

import { login } from "../auth/auth";
import { saveToken } from "../auth/authStorage";
import authContext from "../auth/authContext";

function Login() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [account, setAccount] = useState({
    email: "talhatanveer333@gmail.com",
    password: "12345678",
  });
  const { setUser } = useContext(authContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(account.email, account.password);
      console.error(result);
      if (!result.ok) {
        if (result.data === null)
          setErrorMsg(
            "Something went wrong! Please contact with the developer..."
          );
        else {
          setErrorMsg(result.data);
        }
        setError(true);
        return console.log(
          "Something went wrong! Please contact with the developer."
        ); //console.log("Result from server is not okay.");
      }

      // else successful auth
      setError(false);
      const token = result.data;
      setUser(token);
      saveToken(token);
      window.location.replace("/");
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-40 px-4">
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
              If you don't have an account, please contact hostel office.
            </p>

            <div className="w-full flex items-center justify-between py-5">
              <hr className="w-full bg-gray-400" />

              <hr className="w-full bg-gray-400  " />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-sm font-medium leading-none text-gray-800">
                  Email
                </p>
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
                <p className="text-sm font-medium leading-none text-gray-800">
                  Password
                </p>
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
                {error && (
                  <div className="pt-2">
                    <p className="text-sm font-medium  leading-none text-red-600 ">
                      {errorMsg}
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
