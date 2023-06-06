import logo from "./../assets/icons/logo.png";

export default function Home() {
  return (
    <div className="h-4/5 overflow-hidden items-center flex ">
      <div className="w-full flex flex-col  md:justify-start md:w-2/5 lg:w-3/5">
        <div
          className="text-2xl font-bold flex justify-center md:justify-start"
          style={{ color: "#E1F4F3" }}
        >
          Software Developer
        </div>
        <div
          className="text-8xl font-semibold flex justify-center md:justify-start text-center md:text-start"
          style={{ color: "#FFFFFF" }}
        >
          Harold Cuico
        </div>
      </div>

      <div className="hidden w-full h-full justify-center items-center  right-0 md:w-3/5 lg:w-2/5 md:flex">
        <img src={logo} className="lg:h-fit lg:w-fit md:w-96 md:h-96" />
      </div>
    </div>
  );
}
