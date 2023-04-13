import { Route, Routes } from "react-router-dom";
import Error from "./view/error/Error";
import Home from "./view/home/Home";
import Layout from "./view/layout/Layout";
import List from "./view/list/List";
import Detail from "./view/detail/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
