import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ZamPos from "../pages/ZamPos/ZamPos";
import ZamMobile from "../pages/ZamMobile/ZamMobile";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/zampos" element={<ZamPos />} />
        <Route path="/zammobile" element={<ZamMobile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
