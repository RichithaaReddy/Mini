import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Errorpage from "./components/Errorpage";
import Testpatterns from "./components/Testpatterns";
import TestPatternAdd from "./components/TestPatternAdd";
import TestPatternsDisplay from "./components/TestPatternsDisplay";
import Company from "./components/Company";
import About from "./components/About";
import CompanyStudent from './components/CompanyStudent';
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import MockTestVerbal from "./components/MockTestVerbal";
import MockTestQuant from "./components/MockTestQuant";
import MockTestTech from "./components/MockTestTech";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mocktestverbal" element={<MockTestVerbal />} />
          <Route path="/mocktestquant" element={<MockTestQuant />} />
          <Route path="/mocktesttech" element={<MockTestTech />} />
          <Route path="/dashboard/student/testpatterns/:id" element={<CompanyStudent />} />
          <Route path="/mocktestverbal" element={<MockTestVerbal />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/testpatterns" element={<Testpatterns />} />
          <Route path="/admin/testpatternsadd" element={<TestPatternAdd />} />
          <Route path="/admin/testpatternsdisplay" element={<TestPatternsDisplay />} />
          <Route path="/admin/testpatternsdisplay/:id" element={<Company />} />

          <Route path="*" element={<Errorpage />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
