// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import mechanic from "./../../assets/icons/mechanic.png";
import client from "./../../assets/icons/client.png";
import laundrycare from "./../../assets/icons/laundrycare.png";

export default function WorkList() {
  const works = [
    {
      name: "Ayus Client",
      description:
        "A mobile application that facilitates vehicle drivers in finding and requesting services from mechanics during a vehicular malfunction while travelling.",
      logo: client,
    },
    {
      name: "Laundry Care",
      description:
        "Laundry Care is a mobile and web app for laundry shop clients and laundry shop customers.",
      logo: laundrycare,
    },
    {
      name: "Ayus Mechanic",
      description:
        "A mobile application that facilitates mechanics from accepting request services from clients during a vehicular malfunction while travelling.",
      logo: mechanic,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 items-center">
      {works.map((project, index) => {
        return (
          <div
            key={index}
            className="sm:w-3/5 sm:h-3/5 lg:w-1/3 lg:h-80 xl:h-96 h-1/2 w-full bg-grey relative rounded-xl 
            lg:hover:scale-110 duration-100 cursor-pointer"
          >
            <img src={project.logo} className="w-full h-full p-5" />
            <div className="absolute top-0 left-0 flex w-full h-full opacity-0 hover:opacity-80 transition-opacity duration-300">
              <div className="w-full h-full hover:bg-black flex flex-col items-center rounded-xl p-10 relative">
                <div className="text-white text-3xl font-bold text-opacity-100">
                  {project.name}
                </div>
                <div className="text-white text-center text-opacity-100 p-10">
                  {project.description}
                </div>
                {/* <div className="absolute bottom-0 left-0 mb-10 ml-10 rounded-full bg-white p-3 text-opacity-100">
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="text-black w-5 h-5 flex justify-center"
                  />
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
