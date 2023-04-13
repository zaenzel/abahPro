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
        <h1 className="title text-2xl sm:text-3xl">AbahPro</h1>
        <hr />
        <div className="wrap-items-footer">
          <div className="item-footer">
            <h5>Kantor</h5>
            <IconText>
              <LocationOn />
              <p>
                Warung Yapem, Jl.Agung Ujung, Abadi Jaya, Sukmajaya, Kota Depok,
                16417
              </p>
            </IconText>
          </div>
          <div className="item-footer">
            <h5>Hubungi</h5>
            <ul className="wrap-icon-contact">
              <li>
                <IconText>
                  <Call />
                  <p><span className="font-semibold">Telepon:</span> 082389229830</p>
                </IconText>
              </li>
              <li>
                <IconText>
                  <WhatsApp />
                  <p><span className="font-semibold">Whatsapp:</span> 082389229830</p>
                </IconText>
              </li>
              <li>
                <IconText>
                  <Email />
                  <p><span className="font-semibold">E-mail:</span> abahpro@gmail.com</p>
                </IconText>
              </li>
            </ul>
          </div>
          <div className="item-footer">
            <h5>Media Sosial</h5>
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
