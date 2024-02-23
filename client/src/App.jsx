import './App.css'
import Home from './Home'
import Footer from './pages/Footer';
import Header from './pages/Header';
import LoginForm from './pages/logins/LoginForm';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Reg from './pages/logins/Reg';
import Rules from './pages/rules/Rules';
import ContactUs from './pages/Contact/ContactUs';
import Exam from './pages/Exam/Exam';
import StartExam from './pages/Exam/StartExam';
import C from './pages/Practice/C/C';
import Cplusepluse from './pages/Practice/Cpluse/Cplusepluse';
import Java from './pages/Practice/Java/Java';
import JavaScript from './pages/Practice/Java Script/JavaScript';
import Mysql from './pages/Practice/Mysql/Mysql';
import Csharp from './pages/Practice/Csharp/Csharp';
import NavbarPractice from './pages/NavbarPractice/NavbarPractice';
import UserProfile from './pages/Profile';

function App() {

  return (
   <>
   <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element={<Home></Home>}></Route>
      <Route path='/Login' element={<LoginForm></LoginForm>}></Route>
      <Route path='/' element={<Reg></Reg>}></Route>
      <Route path='/NavbarPractice' element={<NavbarPractice></NavbarPractice>}></Route>
      <Route path='/C' element={<C></C>}></Route>
      <Route path='/Cplusepluse' element={<Cplusepluse></Cplusepluse>}></Route>
      <Route path='/Java' element={<Java></Java>}></Route>
      <Route path='/JavaScript' element={<JavaScript></JavaScript>}></Route>
      <Route path='/Mysql' element={<Mysql></Mysql>}></Route>
      <Route path='/Csharp' element={<Csharp></Csharp>}></Route>
      <Route path="/StartExam" element={<StartExam></StartExam>}></Route>
      <Route path='/Exam' element={<Exam></Exam>}></Route>
      <Route path='/Rules' element={<Rules></Rules>}></Route>
      <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
      <Route path='/UserProfile' element={<UserProfile></UserProfile>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
   </>
  )
}

export default App
