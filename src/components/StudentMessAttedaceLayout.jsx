import React, { Component } from "react";

class Index extends Component {
  state = {};

  render() {
    const { student } = this.props;
    return (
      <div
        className="bg-white dark:bg-white shadow rounded flex w-full my-4 mx-4"
        style={{ width: "97%", borderWidth: 2, borderColor: "green" }}
      >
        <div className="xl:w-2/5 lg:w-2/5 bg-white dark:bg-white py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="h-52 w-52 rounded-full mb-3">
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
    );
  }
}

export default Index;
