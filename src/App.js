import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bookmarks from "./Components/Bookmark/Bookmarks";

function App() {
  return (
    <div className="App">
    <Router>
      <Header/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/bookamrks" element={<Bookmarks/>} />
       </Routes>
    </Router>
    </div>
  );
}

export default App;
