import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MasterLayout from "./MasterLayout";
import { getStudents } from "../services/students";

function Index({ onHandleSelectStudent }) {
  const [show, setShow] = useState(null);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    loadStudents();
  }, []);
  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };
  return (
    <MasterLayout>
      {/* sm:px-6 */}
      <div className="w-full">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            Students
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"></p>
            <div>
              <Link to="/student/new">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
                >
                  <p className="text-sm font-medium leading-none text-white">
                    New Student
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">Student</th>
                <th className="font-normal text-left pl-12">Progress</th>
                <th className="font-normal text-left pl-12">Meals</th>
                <th className="font-normal text-left pl-20">Mess Bill</th>
                <th className="font-normal text-left pl-20">Last Paid</th>
                <th className="font-normal text-left pl-16"></th>
              </tr>
            </thead>
            <tbody className="w-full">
              {!students.length > 0 ? (
                <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                  <td className="pl-4 cursor-pointer">
                    <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block text-justify">
                      No data found.
                    </h3>
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr
                    key={s._id}
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                  >
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full rounded-3xl"
                            src={s.imgUrl}
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium">{s.name}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {s.rollNumber}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        42%
                      </p>
                      <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
                        <div
                          className="w-20 h-3 bg-green-500 rounded-full"
                          style={{ width: "42%" }}
                        />
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="font-medium">33/90</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        57 meals remaining
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">PKR 4,543</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        PKR 1,276 Prevoius
                      </p>
                    </td>
                    <td className="pl-20">
                      <p className="font-medium">15 March, 2022</p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        1 day(s) ago
                      </p>
                    </td>
                    <td className="pl-16">
                      <Link to="/student/info">
                        <button
                          onClick={() => onHandleSelectStudent(s)}
                          type="button"
                          className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
                        >
                          Info
                        </button>
                      </Link>
                    </td>
                    <td className="px-7 2xl:px-0">
                      {show === 0 ? (
                        <button
                          onClick={() => setShow(null)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => setShow(0)}
                          className="focus:outline-none pl-7"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M4.16667 10.8334C4.62691 10.8334 5 10.4603 5 10.0001C5 9.53984 4.62691 9.16675 4.16667 9.16675C3.70643 9.16675 3.33334 9.53984 3.33334 10.0001C3.33334 10.4603 3.70643 10.8334 4.16667 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53976 9.16675 9.16666 9.53984 9.16666 10.0001C9.16666 10.4603 9.53976 10.8334 10 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                              stroke="#A1A1AA"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      )}
                      {show === 0 && (
                        <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 ">
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Edit</p>
                          </div>
                          <div className="text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                            <p>Delete</p>
                          </div>
                        </div>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MasterLayout>
  );
}

export default Index;
