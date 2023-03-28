import { Home } from "@mui/icons-material";
import "./since.css";

const Since = () => {
  return (
    <section className="container-since">
      <h1 className="title-since">Sejak 2010</h1>
      <div className="home-sold">
        <div className="number-home-sold">
          <Home fontSize="inherit" />
          <p className="text-color-sekunder">120+</p>
        </div>
        <h4>Rumah Terjual</h4>
      </div>
    </section>
  );
};

export default Since;
