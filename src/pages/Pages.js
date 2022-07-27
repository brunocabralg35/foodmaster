import { Route, Routes } from "react-router-dom";
import Login from "./Login";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default Pages;
