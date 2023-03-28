import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PropetyInfo from "../../propety-info/PropetyInfo";
import "./partnership.css";

const Partnership = () => {
  return (
    <section className="container-partnership">
      <div className="backdrop"></div>
      <div className="wrap-partnerships">
        <p className="title-partnership">Kemitraan</p>
        <div className="wrap-items-prartnership">
          {[...Array(12)].map((e, i) => {
            return (
              <PropetyInfo key={i}>
                <HolidayVillageIcon fontSize="large" />
                <h5 className="text-base sm:text-xl lg:text-4xl">Tabebuya</h5>
              </PropetyInfo>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
