import { MdEmail } from "react-icons/md";
import {
  FaPhoneAlt,
  FaFacebook,
  FaYoutube,
  FaPinterest,
  FaWhatsappSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-footer rounded-3xl p-8 mx-8 flex flex-col md:flex-row justify-stretch gap-6 ">
        {/* Details */}
        <section className="content-box flex-2 w-52 md:w-64">
          <div className="flex flex-col gap-3 mb-7">
            <img src="/logo.png" alt="logo" className="h-24 w-24" />
            <p>
              The best digital marketing agency in Pune with a proven track
              record of consistently delivering quality service.
            </p>
          </div>
          <div>
            <h4 className="subtitle text-lg">Address</h4>
            <p>
              Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14,
              Maharastra, India.
            </p>
          </div>
          <h4 className="subtitle">Contacts</h4>
          <div className="flex items-center gap-4">
            <MdEmail className="text-xl" />
            <p>hello@osumare.in</p>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-lg" />
            <p>+91 8459 8762 26</p>
          </div>
        </section>
        {/* Menu items */}
        <section className="content-box flex-1 select-none">
          <h4 className="subtitle">Menu</h4>
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Work</p>
          <p>Blog</p>
          <p>Career</p>
        </section>
        {/* Contacts */}
        <section className="content-box">
          <h4 className="subtitle">Social</h4>
          <div className="flex gap-3 flex-wrap">
            <div className="icon-bg">
              <FaFacebook className="icons" />
            </div>
            <div className="icon-bg">
              <FaSquareXTwitter className="icons" />
            </div>
            <div className="icon-bg">
              <FaYoutube className="icons" />
            </div>
            <div className="icon-bg">
              <FaPinterest className="icons" />
            </div>
            <div className="icon-bg">
              <FaWhatsappSquare className="icons" />
            </div>
            <div className="icon-bg">
              <FaInstagramSquare className="icons" />
            </div>
          </div>
        </section>
      </footer>
      <p className="text-center font-semibold  mt-3 font-Montserrat">
        {" "}
        © 2023 Osumare. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
