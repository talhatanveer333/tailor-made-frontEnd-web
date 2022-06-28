import React from "react";
import { motion } from "framer-motion";

import MasterLayout from "../components/MasterLayout";
import AllOrdersTableForAdmin from "../components/AllOrdersTableForAdmin";

function AllOrders(props) {
  return (
    <MasterLayout title="All Orders">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <AllOrdersTableForAdmin />
      </motion.div>
    </MasterLayout>
  );
}

export default AllOrders;
