import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Nav from './components/Nav'
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>

     <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>listing product</h1>}/>
        <Route path="/add" element={<AddProduct/>}/>
        <Route path="/update" element={<h1>update</h1>}/>
        <Route path="/logout" element={<h1>logout product add</h1>}/>
        <Route path="/profile" element={<h1>profile</h1>}/>
        </Route>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />

      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
