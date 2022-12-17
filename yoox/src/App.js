import "./App.css";
import DownNavbar from "./Components/Lownav/DwnNavbar";
import Navbar from "./Components/Navbar";
import Topnavbar from "./Components/Topnav/Topnavbar";
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Topnavbar />
      <Navbar />
      <DownNavbar/>

      <Routes>
        <Route path='/'  element={<Home/>} />
      </Routes>
      
    </>
  );
};

export default App;
