import apiObject from "./apiObject";

const endpoint = "/orders";

async function getAllOrders() {
  try {
    const result = await apiObject.get(endpoint + "/allOrders");
    return result;
  } catch (e) {
    console.error("Catch " + e);
  }
}
async function getMyPendingOrders() {
  try {
    const result = await apiObject.get(endpoint + "/myOrders");
    return result;
  } catch (e) {
    console.error("Catch " + e);
  }
}
async function getMyCompletedOrders() {
  try {
    const result = await apiObject.get(endpoint + "/myCompletedOrders");
    return result;
  } catch (e) {
    console.error("Catch " + e);
  }
}
async function completeOrder(orderId) {
  try {
    const result = await apiObject.post(endpoint + "/completeOrder", {
      orderId,
    });
    return result;
  } catch (e) {
    console.error("Catch " + e);
  }
}
async function rejectOrder(orderId) {
  try {
    const result = await apiObject.post(endpoint + "/rejectOrder", {
      orderId,
    });
    return result;
  } catch (e) {
    console.error("Catch " + e);
  }
}

export {
  getMyPendingOrders,
  getMyCompletedOrders,
  completeOrder,
  rejectOrder,
  getAllOrders,
};
