import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.component";
import { Home } from "./pages/Home.screen";
import { Admin } from "./pages/Admin.screen";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
