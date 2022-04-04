import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import authContext from "./auth/authContext";
import MasterLayout from "./components/MasterLayout";
import NotFoundPage from "./screens/NotFoundPage";
import Login from "./screens/Login";
import RegisterNewStudent from "./screens/RegisterNewStudent";
import StudentTable from "./components/StudentsTable";
import StudentInfo from "./screens/StudentInfo";
import AttendancePage from "./screens/AttedancePage";
import WelcomeAttendancePage from "./screens/WelcomeAttendancePage";
import RegisterUser from "./screens/RegisterUser";
import { getStudents } from "./services/students";

function App() {
  // this module should have all the data and pass to other components accordingly
  const [user, setUser] = useState();
  const [students, setStudents] = useState([]);
  const [selectedStudentForInfoPage, setSelectedStudentForInfoPage] = useState(
    {}
  );
  useEffect(() => {
    loadStudents();
    //console.log(`user from app.js : ${user.name}`);
  });
  const loadStudents = async () => {
    const result = await getStudents();
    setStudents(result);
  };
  const handleSelectStudent = (student) => {
    setSelectedStudentForInfoPage(student);
  };
  return (
    <>
      <authContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route
            path="/"
            exact
            element={user ? <StudentTable /> : <Navigate to="/login" />}
          />
          <Route path="/login" exact element={<Login />} />

          <Route
            path="/attedance"
            exact
            element={
              <AttendancePage
                student={{
                  isMessAllowed: true,
                  name: "Talha",
                  rollNmber: "17F-8161",
                }}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
          <Route path="/register" element={<RegisterUser />} />
        </Routes>
      </authContext.Provider>
    </>
  );
}

export default App;
