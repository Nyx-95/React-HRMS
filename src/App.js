import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './Utils/routes';
import UserProfile from './Component/UserProfile/body';
import DashboardLayout from './Component/Layout/DashboardLayout';
import MyDepartment from './Component/UserProfile/myDepartment/myDepartment';
import FamilyDetail from './Component/UserProfile/editProfileDetails/FamilyDetails/familyDetail';
import PreviousWork from './Component/UserProfile/editProfileDetails/PreviousWork/PreviousWork';
import EmployeeData from './Component/UserProfile/editProfileDetails/EmployeeData/employeeData';
import AcademicDetail from './Component/UserProfile/editProfileDetails/AcademicDetails/academicDetail';
import FamilyTree from './Component/UserProfile/familyTree/familyTree';
import MyAttendance from './Component/UserProfile/myAttendance/myAttendance';
import EducationalDetail from './Component/UserProfile/educationalDetails/educationalDetail';
import MyData from './Component/UserProfile/myData/myData';
import WorkExpierence from './Component/UserProfile/workExperience/workExperience';
import EditProfile from './Component/UserProfile/editProfileDetails/editProfile';
import MyDocument from './Component/UserProfile/myDocument/myDocument';
import DashBoard from './Component/DashBoard/dashBoard'
import UserBody from './Component/User/userBody';
import BankDetails from './Component/User/BankDetails/bankDetails';
import UserDirectory from './Component/User/userDirectory/userDirectory';
import AllUser from './Component/User/AllUser/allUser'


function App() {
  return (
    <div className="App">



      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.USER_PROFILE} element={<UserProfile></UserProfile>}>
            <Route path={ROUTES.MY_DEPARTMENT} element={<MyDepartment />}></Route>
            <Route path={ROUTES.FAMILY_TREE} element={<FamilyTree />}></Route>
            <Route path={ROUTES.MY_DATA} element={<MyData />}></Route>
            <Route path={ROUTES.MY_ATTENDANCE} element={<MyAttendance />}></Route>
            <Route path={ROUTES.WORK_EXPERIENCE} element={<WorkExpierence />}></Route>
            <Route path={ROUTES.EDUCATIONAL_DETAIL} element={<EducationalDetail />}></Route>
            <Route path={ROUTES.MY_DOCUMENT} element={<MyDocument />}></Route>
            <Route element={<EditProfile />}>
              <Route path={ROUTES.FAMILY_DETAIL} element={<FamilyDetail />} />
              <Route path={ROUTES.PREVIOUS_WORK} element={<PreviousWork />} />
              <Route path={ROUTES.EMPLOYEE_DATA} element={<EmployeeData />} />
              <Route path={ROUTES.ACADEMIC_DETAIL} element={<AcademicDetail />} />
            </Route>
          </Route>

          <Route path={ROUTES.DASHBOARD} element={<DashBoard></DashBoard>} />



          <Route path={ROUTES.USER_BODY} element={<UserBody></UserBody>}>
            <Route path={ROUTES.BANK_DETAILS} element={<BankDetails />}></Route>
            <Route path={ROUTES.USER_DIRECTORY} element={<UserDirectory />}></Route>
            <Route path={ROUTES.ALL_USER} element={<AllUser />}></Route>
          </Route>
        </Route>


      </Routes>



    </div>
  );
}

export default App;


