// import { Toaster } from "sonner";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <>
//       <Toaster richColors />

//       <BrowserRouter>
//         <Routes>
// <Route path="/trangchu" element={<Home_TrangChu />} />
// <Route path="/" element={<Introduce />} />
// <Route path="/login" element={<LoginPage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster, toast } from "sonner";
import Test from "./pages/Test";
import Parent from "./pages/Parent";
import Home_TrangChu from "./pages/Home_TrangChu";
import LoginPage from "./pages/LoginPage";
import Introduce from "./pages/Introduce";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/trangchu" element={<Home_TrangChu />} />
          <Route path="/" element={<Introduce />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test_parent" element={<Parent />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

