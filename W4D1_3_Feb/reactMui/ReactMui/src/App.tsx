import "./App.css";
import MiniDrawer from "./components/sideBox";
import Dashboard from "./screens/dashboard";
import Contact from "./screens/contactUs";
import Subcription from "./screens/subscriptions";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
       
        <BrowserRouter>
        <MiniDrawer />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/subscriptions" element={<Subcription />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
