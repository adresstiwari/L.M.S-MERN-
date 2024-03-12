import './App.css'

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from './Components/Auth/RequireAuth.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Contact from './Pages/Contact.jsx';
import CourseDescription from './Pages/Course/CourseDescription.jsx';
import CourseList from './Pages/Course/CourseList.jsx';
import CreateCourse from './Pages/Course/CreateCourse.jsx';
import Addlecture from './Pages/Dashboard/Addlecture.jsx';
import Admindashboard from './Pages/Dashboard/Admindashboard.jsx';
import Displaylectures from './Pages/Dashboard/Displaylectures.jsx';
import Denied from './Pages/Denied.jsx';
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import NotFound from './Pages/NotFound.jsx';
import Checkout from './Pages/Payment/Checkout.jsx';
import CheckoutFail from './Pages/Payment/CheckoutFail.jsx';
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess.jsx';
import SignUp from './Pages/SignUp.jsx';
import Editprofile from './Pages/User/Editprofile.jsx';
import Profile from './Pages/User/Profile.jsx';

function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<HomePage />}> </Route>
      <Route path='/about' element={<AboutUs />}> </Route>
      <Route path='/signup' element={<SignUp />}> </Route>
      <Route path='/login' element={<Login />}> </Route>
      <Route path='/contact' element={<Contact />}> </Route>
       <Route path='/denied' element={<Denied />}> </Route>
      
      <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}>
      <Route path='/course/addlecture' element={<Addlecture />}> </Route> 
      <Route path='admin/dashboard' element={<Admindashboard />}> </Route> 
         <Route path='/course/create' element={<CreateCourse />}> </Route>
      </Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]}/>}>
        <Route path='/user/profile' element={<Profile />}> </Route>
        <Route path='/checkout/success' element={<CheckoutSuccess />}> </Route>
        <Route path='/checkout' element={<Checkout />}> </Route>
        <Route path='/course/displaylectures' element={<Displaylectures />}> </Route>
        <Route path='/checkout/fail' element={<CheckoutFail />}> </Route>
        <Route path='/user/editprofile' element={<Editprofile />}> </Route>
      </Route>
     
      <Route path='/courses' element={<CourseList />}> </Route>
      <Route path='/course/description' element={<CourseDescription />}> </Route>
      <Route path='*' element={<NotFound />}> </Route>
    </Routes> 
      </>
  )
}

export default App;
