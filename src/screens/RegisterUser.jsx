import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { signUp } from "../services/tailor";

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    intro: "",
  });
  const { error, setError } = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(
        user.name,
        user.address,
        user.email,
        user.password,
        user.intro
      );
      if (!result.ok) return console.log("Error");
      console.log(result.data);
      // else if successfull signup
      //const decodedUser = await jwtDecode(result.data);
      //setUser(decodedUser);
      //console.log(user);
      //navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = ({ currentTarget }) => {
    const userData = { ...user };
    userData[currentTarget.name] = currentTarget.value;
    setUser(userData);
    console.log(user);
  };
  return (
    <div>
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            SignUp
          </p>
        </div>
      </div>
      <div className="w-full bg-white p-10">
        <h1
          tabIndex={0}
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 "
        >
          Profile info
        </h1>

        <div className="mb-3 w-96 mt-8">
          <label
            for="formFileSm"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Upload your profile picture
          </label>
          <input
            className="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="formFileSm"
            type="file"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-8 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Name
              </label>
              <input
                name="name"
                value={user.name}
                onChange={handleChange}
                type="name"
                tabIndex={0}
                aria-label="Enter first name"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>

            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Address
              </label>
              <input
                name="address"
                value={user.address}
                onChange={handleChange}
                type="address"
                tabIndex={0}
                aria-label="Enter your address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Email Address
              </label>
              <input
                name="email"
                value={user.email}
                onChange={handleChange}
                type="email"
                tabIndex={0}
                aria-label="Enter email Address"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue=""
              />
            </div>
            <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Password
              </label>
              <input
                name="password"
                value={user.password}
                onChange={handleChange}
                type="password"
                tabIndex={0}
                aria-label="Enter a minimum of 8 digit password"
                className="w-64 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
                defaultValue=""
              />
            </div>
          </div>
          <div className="mt-12 md:flex items-center">
            <div className="flex flex-col">
              <label className="mb-3 text-sm leading-none text-gray-800">
                Short Intro
              </label>
              <input
                name="intro"
                value={user.intro}
                onChange={handleChange}
                type="text"
                tabIndex={0}
                aria-label="Enter short intro"
                className="w-96 bg-gray-100 text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="mt-12">
            <div className="py-4 flex items-center">
              <div className="bg-white  border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                <input
                  type="checkbox"
                  tabIndex={0}
                  aria-label="I agree with the terms of service"
                  defaultChecked
                  className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
                />
                <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                  <svg
                    className="icon icon-tabler icon-tabler-check"
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
              </div>
              <p className="text-sm leading-none ml-2">
                I agree with the fake{" "}
                <span className="text-indigo-700">terms of service</span>
              </p>
              <p className="text-sm leading-none ml-2">{error && error}</p>
            </div>
          </div>
          <button
            aria-label="Next step"
            className="flex items-center justify-center py-4 px-7 focus:outline-none bg-white border rounded border-gray-400 mt-7 md:mt-14 hover:bg-gray-100  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-gray-800 capitalize">
              SignUp as Tailor
            </span>
            <svg
              className="mt-1 ml-3"
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.01 3H0V5H8.01V8L12 4L8.01 0V3Z" fill="#242731" />
            </svg>
          </button>
        </form>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
        }}
      />
    </div>
  );
}

export default SignUp;
