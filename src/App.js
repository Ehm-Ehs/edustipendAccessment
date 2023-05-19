import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/index";
import ContactUs from "./component/contactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
