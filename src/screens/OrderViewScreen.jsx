import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import OrdersDetailsTable from "../components/OrdersDetailsTable";
import MasterLayout from "../components/MasterLayout";

function OrderViewScreen() {
  return (
    <MasterLayout title="Dashboard">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <OrdersDetailsTable />
      </motion.div>
    </MasterLayout>
  );
}

export default OrderViewScreen;
