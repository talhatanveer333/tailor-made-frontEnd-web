import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { getMyCompletedOrders } from "../services/orderAPI";
import authContext from "../auth/authContext";

function Index({ roomId }) {
  const { user } = useContext(authContext);
  const [orderList, setOrderList] = useState([]);
  const getDetails = async () => {
    const result = await getMyCompletedOrders();
    console.log(result.data);
    // else if got the reservations
    setOrderList(result.data);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      {/* <ConfirmationAlert /> */}
      {orderList && (
        <div className="w-full">
          <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div></div>
            <div className="sm:flex items-center justify-between text-lg">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                All Orders
              </p>
            </div>
          </div>
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Customer</th>
                  <th className="font-normal text-left pl-4">
                    Product &amp; Description{" "}
                  </th>
                  <th className="font-normal text-left pl-4">Qty</th>
                  <th className="font-normal text-left pl-4">Amount</th>
                  <th className="font-normal text-left pl-4">Status</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {orderList.length < 1 ? (
                  <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                    <td className="pl-4 cursor-pointer">
                      <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block text-justify">
                        No Orders Found
                      </h3>
                    </td>
                  </tr>
                ) : (
                  orderList.map((s) => (
                    <tr
                      key={s._id}
                      className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                    >
                      <td className="pl-4 cursor-pointer">
                        <div className="flex items-center">
                          <div className="w-10 h-10">
                            <img
                              className="w-full h-full rounded-3xl"
                              src={require("../assets/profilePlaceholder.png")}
                              alt=""
                              width={40}
                              height={40}
                            />
                          </div>
                          <div className="pl-4">
                            <p className="font-medium">{s.customer.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="font-large">{s.product}</p>
                            <p className="font-large pt-2">{s.description}</p>
                          </div>
                        </div>
                      </td>
                      <td className="cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="p-2 rounded font-large bg-green-100">
                              {s.qty}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            <p className="p-2 rounded font-large bg-red-100">
                              {s.amount}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="cursor-pointer">
                        <div className="flex items-center">
                          <div className="pl-4">
                            {s.status === "Completed" ? (
                              <p className="p-2 rounded bg-green-400 font-large">
                                {s.status}
                              </p>
                            ) : (
                              <p className="p-2 rounded bg-red-400 font-large">
                                {s.status}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
