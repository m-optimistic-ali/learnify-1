

import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './App.css';
import CallHomePage from './components/meeeting/callhomepage/callhomepage';
import CallPage from './components/meeeting/callpage/callpage';
import Header from './components/header';
import Login from './pages/authpages/loginp';
import Signup from './pages/authpages/signupp';
import Landingpage from './pages/home';
import Navbarmain from './pages/mainnavbar';
import OurMoto from './pages/moto';
import { useState } from 'react';
import CustomPopup from './components/meeeting/scanface/joinmeeting-popup1';
import CustomPopupShowFace from './components/meeeting/scanface/facescanprogress';
import ParticipationReport from './pages/participationreport';
import { useCookies } from 'react-cookie';
import TeacherClassDetails from './teacher/teacherclassdetails';
import Dashboard from './student/studentdashboard';
import ClassDetails from './student/studentclassdetails';
import TeacherDashboard from './teacher/teacherdashboard';
import Calendar from './components/calendar';


function App() {
  const [cookies, setCookies] = useCookies();






  return (


    <div className="">

      <BrowserRouter>

        {
          cookies.StudentAuth || cookies.teacherAuth ? <Header /> : <Navbarmain />
        }





        <Routes>

          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/signin' element={<Login />} />


          <Route exact path='/:id' element={<CallPage />} />
          <Route exact path='/meetinghome' element={<CallHomePage />} />


          <Route exact path='/' element={<Landingpage />} />

          <Route exact path='/moto' element={<OurMoto />} />


          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path='/dashboard/classdetails' element={<ClassDetails />} />


          {/* teacher */}
          <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route exact path='teacher/dashboard/classdetails' element={<TeacherClassDetails />} />
          <Route exact path="/events" element={<Calendar />} />
          <Route exact path="/scanface" element={<CustomPopup />} />
          <Route exact path='/participationReport' element={<ParticipationReport />} />
          <Route exact path='/showface' element={<CustomPopupShowFace />} />
        </Routes>

      </BrowserRouter>





    </div>
  );
}

export default App;
