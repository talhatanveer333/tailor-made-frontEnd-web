import React, { useState } from "react";

export default function Index() {
  const [show, setshow] = useState(true);

  return (
    <div className="bg-gray-800">
      <div
        id="button"
        className={`${
          show ? "hidden" : "flex"
        } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
      >
        <button
          onClick={() => setshow(true)}
          className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
        >
          FAST NUCES Hostel Management System
        </button>
      </div>
      <div
        id="modal"
        className={`${
          show ? "flex" : "hidden"
        } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
      >
        <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
          <h3>FAST NUCES Hostel Management System</h3>

          <h1 className="mt-8 md:mt-12 text-3xl lg:text-4xl font-semibold leading-10 text-center text-gray-800 text-center md:w-9/12 lg:w-7/12">
            Welcome to the Mess Attendance Page!
          </h1>
          <p className="mt-10 text-base leading-normal text-center text-gray-600 md:w-9/12 lg:w-7/12">
            Please tap your RFID card on the RFID reader machine for attendance
          </p>
          <div className="mt-12 md:mt-14 w-full flex justify-center">
            <button
              onClick={() => setshow(false)}
              className="w-full sm:w-auto border border-gray-800 text-base font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white"
            >
              Start Attedance
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
