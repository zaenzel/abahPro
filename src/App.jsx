import { Route, Routes } from "react-router-dom";
import Error from "./view/error/Error";
import Home from "./view/home/Home";
import Layout from "./view/layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
