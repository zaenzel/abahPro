import SingleBedIcon from "@mui/icons-material/SingleBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import IconText from "../icon-text/IconText";

const WrapIconPro = () => {
  return (
    <div className="flex justify-between text-neutral-700 max-w-xs">
      <IconText>
        <SingleBedIcon fontSize="medium" />
        <p>2</p>
      </IconText>
      <IconText>
        <BathtubIcon fontSize="medium" />
        <p>2</p>
      </IconText>
      <IconText>
        <ZoomOutMapIcon fontSize="medium" />
        <p>
          200 m<sup>2</sup>
        </p>
      </IconText>
    </div>
  );
};

export default WrapIconPro;
