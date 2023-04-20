import { Route, Routes } from "react-router-dom";
import Error from "./view/error/Error";
import Home from "./view/home/Home";
import Layout from "./view/layout/Layout";
import Detail from "./view/detail/Detail";
import ListPro from "./view/list/listPro/ListPro";
import ListBlog from "./view/list/listBlog/ListBlog";
import Blog from "./view/blog/Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="listproperti">
            <Route index element={<ListPro />} />
            <Route path="properti/:id" element={<Detail />} />
          </Route>
          <Route path="listblog">
            <Route index element={<ListBlog />} />
            <Route path="blog/:id" element={<Blog />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
