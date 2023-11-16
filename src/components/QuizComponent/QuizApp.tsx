import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginComponent from '../LoginComponent/LoginComponent';
import { SignupComponent } from '../SignupComponent/SignupComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import WelcomeComponent from '../WelcomeComponent/WelcomeComponent';
import ToDoComponent from '../ToDoAppComponent/ToDoComponent';
import Quiz from './Quiz';
import ErrorComponent from '../ErrorComponent/ErrorMessage';
import Logout from '../LogoutComponent/Logout';
// import PrivateRoute from '../Security/PrivateRoute';

export default function QuizApp() {
  return (
    <div className="QuizApp">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/signup" element={<SignupComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/todos" element={<ToDoComponent />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/error" element={<ErrorComponent />} />
          <Route index element={<LoginComponent />} />
        </Routes>
      </Router>
    </div>
  );
}
