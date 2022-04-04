import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Index({ student }) {
  const [messAllowed, setMessAllowed] = useState();
  useEffect(() => {
    student.isMessAllowed
      ? setMessAllowed(student.isMessAllowed)
      : setMessAllowed(false);
  }, [student.isMessAllowed]);
  const handleMessOnOff = () => {
    setMessAllowed(!messAllowed);
    // call api accordingly
  };
  return (
    <>
      {/* Card is full width. Use in 8 col grid for best view. */}
      {/* Card code block start */}
      <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
        <div className="sm:flex items-center justify-between">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
            Student Info
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-white shadow rounded xl:flex lg:flex w-full">
        <div className="xl:w-2/5 lg:w-2/5 bg-white dark:bg-white py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full mb-3">
              <img
                className="h-full w-full object-cover rounded-full shadow"
                src={student.imgUrl}
                alt=""
              />
            </div>
            <p className="mb-2 text-lg font-bold text-gray-600 dark:text-gray-600">
              {student.name}
            </p>
            <p className="mb-6 text-sm text-gray-700 dark:text-gray-500">
              {student.rollNumber}
            </p>
            <button
              type="button"
              className={
                messAllowed
                  ? "inline-block px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  : "inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              }
              onClick={handleMessOnOff}
            >
              {messAllowed ? "Mess: On" : "Mess: Off"}
            </button>
            <Link to="/student/new">
              <button
                type="button"
                className="inline-block px-6 py-2 border-2 border-gray-500 text-gray-500 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-2"
              >
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-800 dark:text-gray-800 font-medium">
                  Birthday
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">
                  29 Jan, 1982
                </p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-800 font-medium">
                  Gender
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">Male</p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-800 font-medium">
                  Location
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">
                  California, USA
                </p>
              </div>
            </div>
            <div className="w-2/5 mb-8">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-800 font-medium">
                  Phone Number
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">
                  202-555-0191
                </p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-800 font-medium">
                  Last Login
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">
                  Today
                </p>
              </div>
            </div>
            <div className="w-2/5">
              <div className="border-b pb-3">
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-800 font-medium">
                  Status
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-600">
                  Approved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Index;
