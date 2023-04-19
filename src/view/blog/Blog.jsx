import CardCall from "../../components/card/card-call/CardCall";
import imgBlog from "/images/home.jpg";
import "./blog.css";

const Blog = () => {
  return (
    <div className="md:flex md:container md:mx-auto">
      <div className="basis-2/3 space-y-5">
        <img src={imgBlog} alt="image-blog" className="image-detail" />
        <div className="">
          <h1 className="">Tips & Trick Membeli Rumah</h1>
          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            vitae quia suscipit mollitia error fugiat voluptas beatae dolorum
            consequatur, vel libero incidunt ducimus aliquam possimus
            consectetur adipisci nostrum esse exercitationem!
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
