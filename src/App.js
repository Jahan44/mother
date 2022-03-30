import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/HomePage/Home";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import PageNot from "./component/PageNotFound/PageNot";
import Footer from "./component/Footer/Footer";
import Update from "./component/Update/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/update/:updateId" element={<Update></Update>}></Route>
          <Route path="/*" element={<PageNot></PageNot>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
