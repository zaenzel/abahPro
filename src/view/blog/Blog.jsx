import { useParams } from "react-router-dom";
import CardCall from "../../components/card/card-call/CardCall";
import blogs from "../../data/blogs";

const Blog = () => {
  const { id } = useParams();
  const dataBlog = blogs;

  return (
    <div className="md:flex md:container md:mx-auto">
      <div className="basis-2/3 space-y-5">
        <img
          src={dataBlog[id - 1].image}
          alt="image-blog"
          className="w-full max-h-72 md:rounded-2xl object-cover bg-center"
        />
        <div className="desc-detail">
          <h1 className="title-desc">{dataBlog[id - 1].title}</h1>
          <p className="">
          {dataBlog[id - 1].content}
          </p>
        </div>
      </div>
      <aside className="container mx-auto px-3 mt-10 md:mt-0 basis-1/3 min-w-fit">
        <CardCall />
      </aside>
    </div>
  );
};

export default Blog;
