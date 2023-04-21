import { Link } from "react-router-dom";
import "./cardBlog.css";

const CardBlog = ({ blogs }) => {
  return (
    <Link to={`blog/${blogs.id}`}>
      <div className="wrap-items-cardBlog max-w-xs">
        <img src={blogs.image} alt="image-blog" className="image-cardPro" />
        <h1 className="title-cardBlog">{blogs.title}</h1>
        <p className="summary-blog text-color-ADADAD">{blogs.content}</p>
        <p className="continue-reeding">Lanjutkan membaca</p>
      </div>
    </Link>
  );
};

export default CardBlog;
