
import {Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Error from "./pages/Error";
import SingleNewsPage from "./pages/SingleNewsPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/searchNews" element={<SearchPage />} />
        <Route path="/news/:title" element={<SingleNewsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
