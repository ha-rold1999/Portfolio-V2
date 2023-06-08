import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Copyright() {
  return (
    <div className="max-w-screen-2xl h-10 py-2  md:px-20 overflow-hidden flex flex-col px-4 bg-black">
      <div className="text-white flex justify-center items-center space-x-1">
        <div>Copyright</div>
        <FontAwesomeIcon icon={faCopyright} />
        <div>2023 Harold Cuico</div>
      </div>
    </div>
  );
}
