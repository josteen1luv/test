import {BrowserRouter, Route, Routes} from "react-router-dom";
import Test1 from "./components/test1.jsx";
import Test from "./components/test.jsx";
import Test2 from "./components/test2.jsx";
import HomeButton from "./components/homeButton.jsx";

function App() {
  return (
    <BrowserRouter>
     <HomeButton/>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
