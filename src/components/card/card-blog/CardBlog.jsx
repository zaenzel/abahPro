import { Link } from "react-router-dom";
import "./cardBlog.css";

const CardBlog = () => {
  return (
    <Link to={`blog/${1}`}>
      <div className="wrap-items-cardBlog max-w-xs">
        <img
          src="./images/home.jpg"
          alt="image-blog"
          className="image-cardPro"
        />
        <h1 className="title-cardBlog">Tips & trick memilih rumah</h1>
        <p className="summary-blog">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          error blanditiis ipsa cum perferendis fugiat aut id voluptatibus odio
          suscipit non laborum minus saepe optio, inventore, asperiores aliquid
          ut libero.
        </p>
        <p className="continue-reeding">Lanjutkan membaca</p>
      </div>
    </Link>
  );
};

export default CardBlog;
