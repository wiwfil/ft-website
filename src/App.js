import {useState} from "react"
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css"
import Team from "./Components/Team/Team";
import ContactUs from "./Components/Contact/ContactUs";
import Modal from "./Components/Team/Modal";
//import Gallery from "./Components/Gallery/Gallery";
//import Admin from "./Components/Admin/Admin";

function App() {
  
  const [selectedImageId, setSelectedImageId] = useState(null)

  return (
   <>
      <Router>
      <div className="pages">
        <Routes>
          <Route  path="/" element={<><Navbar /> <Home/></>}/>
          <Route  path="/team" element={<><Navbar /><Team setSelectedImageId={setSelectedImageId} />{selectedImageId &&<Modal selectedImageId={selectedImageId} setSelectedImageId={setSelectedImageId}/>}</>}/>
          <Route  path="/contact" element={<><Navbar /><ContactUs/></>}/>
          
          {/*
          <Route  path="/gallery" element={<><Navbar /><Gallery/></>}/>
          <Route  path="/admin" element={<Admin/>}/>
  <Route  path="/dashboard" element={<Admin />}/>*/}
          
        </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
