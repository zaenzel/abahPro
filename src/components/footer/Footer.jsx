import {
  Call,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  WhatsApp,
  YouTube,
} from "@mui/icons-material";
import IconText from "../icon-text/IconText";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="wrap-footer">
        <h1 className="title text-2xl">AbahPro</h1>
        <hr />
        <div className="wrap-items-footer">
          <div className="item-footer">
            <h5>Office</h5>
            <IconText>
              <LocationOn />
              <p>
                Warung Yapem, Jl.Agung Ujung, Abadi Jaya, Sukmajaya, Kota Depok,
                16417
              </p>
            </IconText>
          </div>
          <div className="item-footer">
            <h5>Contact</h5>
            <ul className="wrap-icon-contact">
              <li>
                <IconText>
                  <Call />
                  <p>082389229830</p>
                </IconText>
              </li>
              <li>
                <IconText>
                  <WhatsApp />
                  <p>082389229830</p>
                </IconText>
              </li>
              <li>
                <IconText>
                  <Email />
                  <p>abahpro@gmail.com</p>
                </IconText>
              </li>
            </ul>
          </div>
          <div className="item-footer">
            <h5>Follow us</h5>
            <div className="icon-medsos">
              <Facebook fontSize="large" />
              <Instagram fontSize="large" />
              <YouTube fontSize="large" />
              <LinkedIn fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
