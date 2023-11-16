import React from 'react'
// import NavBar from './components/NavigationBar';
import QuizApp from './components/QuizComponent/QuizApp';
import { FooterComponent } from './components/FooterComponent/FooterComponent';
// import Styles from './App.css';

function App() {
  return (
    <div>
      {/* <Router>
        <NavBar />
      </Router> */}
      <QuizApp />
      <FooterComponent />
    </div>
  );
}

export default App;
