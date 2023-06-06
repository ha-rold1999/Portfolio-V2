import logo from "./../assets/icons/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="w-full h-1/5 flex flex-row items-center px-5 md:px-0">
      <div className="w-2/5 h-full md:w-1/5 flex items-center">
        <img src={logo} className="w-24 h-24 " />
      </div>
      <div className="hidden md:flex w-4/5  justify-end md:space-x-5 lg:space-x-8">
        <div className="text-xl text-white">Home</div>
        <div className="text-xl text-white">About</div>
        <div className="text-xl text-white">Specialty</div>
        <div className="text-xl text-white">Porfolio</div>
        <div className="text-xl text-white">Contact</div>
      </div>
      <div className="flex justify-end w-3/5 md:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="w-10 h-10 text-white md:hidden"
        />
      </div>
    </div>
  );
}
