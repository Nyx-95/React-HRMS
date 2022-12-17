import Header from './Component/Header/header';
import Body from './Component/Body/body';
import DashboardLayout from './Component/Layout/DashboardLayout';
import Footer from './Component/Footer/footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import MyDepartment from './Component/Body/myDepartment/myDepartment';
import FamilyDetail from './Component/Body/editProfileDetails/FamilyDetails/familyDetail';
import PreviousWork from './Component/Body/editProfileDetails/PreviousWork/PreviousWork';
import EmployeeData from './Component/Body/editProfileDetails/EmployeeData/employeeData';
import AcademicDetail from './Component/Body/editProfileDetails/AcademicDetails/academicDetail';
import FamilyTree from './Component/Body/familyTree/familyTree';
import MyAttendance from './Component/Body/myAttendance/myAttendance';
import EducationalDetail from './Component/Body/educationalDetails/educationalDetail';
import MyData from './Component/Body/myData/myData';
import WorkExpierence from './Component/Body/workExperience/workExperience';
import EditProfile from './Component/Body/editProfileDetails/editProfile';
import { ROUTES } from './Utils/routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.HOME} element={<DashboardLayout />}>
          <Route path={ROUTES.HOME} element={<Body></Body>}>
            <Route path={ROUTES.MY_DEPARTMENT} element={<MyDepartment />}></Route>
            <Route path={ROUTES.FAMILY_TREE} element={<FamilyTree />}></Route>
            <Route path={ROUTES.MY_DATA} element={<MyData />}></Route>
            <Route path={ROUTES.MY_ATTENDANCE} element={<MyAttendance />}></Route>
            <Route path={ROUTES.WORK_EXPERIENCE} element={<WorkExpierence />}></Route>
            <Route path={ROUTES.EDUCATIONAL_DETAIL} element={<EducationalDetail />}></Route>
            <Route element={<EditProfile/>}>
              <Route path={ROUTES.FAMILY_DETAIL} element={<FamilyDetail />}/>
              <Route path={ROUTES.PREVIOUS_WORK} element={<PreviousWork />}/>
              <Route path={ROUTES.EMPLOYEE_DATA} element={<EmployeeData />}/>
              <Route path={ROUTES.ACADEMIC_DETAIL} element={<AcademicDetail />}/>
            </Route>
          </Route>
        </Route>

      </Routes>

    </div>
  );
}

export default App;


