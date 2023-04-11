import { HolidayVillage } from "@mui/icons-material";
import IconText from "../../icon-text/IconText";
import "./sliderPartner.css";

const SliderPartner = () => {
  return (
    <div className="container-slider-partner">
      <div className="wrap-slider-partner">
        <div className="title-slider-partner">Mitra Kami</div>
        <div className="wrap-items-slider-partner">
          {[...Array(50)].map((e, i) => {
            return (
              <IconText key={i}>
                <HolidayVillage fontSize="large" />
                <h5 className="text-base sm:text-xl lg:text-4xl">Tabebuya</h5>
              </IconText>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SliderPartner;
