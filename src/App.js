import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { getUser } from "./auth/authStorage";

import authContext from "./auth/authContext";
import LoginScreen from "./screens/Login";
import NotFoundPage from "./screens/NotFoundPage";
import OrderViewScreen from "./screens/OrderViewScreen";
import AllOrdersScreen from "./screens/AllOrdersScreen";
import AllOrdersForAdminScreen from "./screens/AllOrdersForAdminScreen";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const getUserFromStorage = async () => {
    setLoading(true);
    //console.log("loading true");
    const result = await getUser();
    setUser(result);
    //console.log(result);
    setLoading(false);
    //console.log("loading false");
  };
  useEffect(() => {
    getUserFromStorage();
  }, []);
  if (loading)
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  return (
    <authContext.Provider value={{ user, setUser }}>
      <AnimatePresence>
        <Routes>
          {user ? (
            <>
              {user.type === "admin" ? (
                <>
                  <Route path="/" element={<AllOrdersForAdminScreen />} />
                </>
              ) : (
                <>
                  <Route path="/" element={<OrderViewScreen />} />
                  <Route path="/allOrders" element={<AllOrdersScreen />} />
                  <Route path="/login" element={<LoginScreen />} />
                </>
              )}

              <Route path="*" element={<NotFoundPage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginScreen />} />
              <Route path="*" element={<LoginScreen />} />
            </>
          )}
        </Routes>
      </AnimatePresence>
    </authContext.Provider>
  );
}

export default App;
