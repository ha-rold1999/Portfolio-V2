import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import fb from "./../../assets/icons/facebook.png";
import insta from "./../../assets/icons/instagram.png";
import li from "./../../assets/icons/linkedin.png";
import cv from "./../../assets/files/Harold Cuico - CV.pdf";

export default function Info() {
  return (
    <div className="lg:w-2/5 w-full h-auto ">
      <div className="text-4xl md:text-6xl font-bold text-white mb-5">
        Contact Me
      </div>
      <div className="flex flex-row  items-center  py-3">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-7 h-7 lg:w-10 lg:h-10 text-white"
        />
        <div className="text-white pl-5 lg:text-2xl text-xl">
          harold.tariman.cuico@gmail.com
        </div>
      </div>
      <div className="flex flex-row  items-center py-3">
        <FontAwesomeIcon
          icon={faIdBadge}
          className="w-7 h-7 lg:w-10 lg:h-10 text-white"
        />
        <div className="text-white pl-5 lg:text-2xl text-xl">09567126397</div>
      </div>
      <div className="flex flex-row py-3 space-x-3 justify-center lg:justify-start">
        <a
          href="https://www.facebook.com/harold.cuico26/"
          className="duration-300 hover:-translate-y-2"
        >
          <img src={fb} className="w-14 h-14 rounded-xl" />
        </a>
        <a
          href="https://www.instagram.com/ha_rold26/"
          className="duration-300 hover:-translate-y-2"
        >
          <img src={insta} className="w-14 h-14 rounded-xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/harold-cuico-9340b824b/"
          className="duration-300 hover:-translate-y-2"
        >
          <img src={li} className="w-14 h-14 rounded-xl" />
        </a>
      </div>
      <div className="flex justify-center lg:py-10 py-5">
        <a href={cv} download={true}>
          <div
            className="px-10 py-2 border-2 border-black rounded-xl text-xl font-bold 
                text-black cursor-pointer hover:text-white hover:bg-black transition-colors 
                  duration-300"
          >
            Download CV
          </div>
        </a>
      </div>
    </div>
  );
}
