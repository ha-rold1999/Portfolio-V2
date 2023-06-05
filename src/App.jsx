import logo from "./assets/icons/logo.png";

function App() {
  return (
    <div className="w-screen h-screen px-20">
      <div className=" w-full h-1/5 flex flex-row items-center">
        <div className="w-1/5 flex ">
          <img src={logo} className="w-24 h-24 " />
        </div>
        <div className="flex flex-row w-4/5 justify-end space-x-10">
          <div className="text-xl text-white">Home</div>
          <div className="text-xl text-white">About</div>
          <div className="text-xl text-white">Specialty</div>
          <div className="text-xl text-white">Porfolio</div>
          <div className="text-xl text-white">Contact</div>
        </div>
      </div>
      <div className="flex flex-row h-4/5">
        <div className="w-3/5  flex justify-center flex-col">
          <div className="text-2xl font-bold" style={{ color: "#E1F4F3" }}>
            Software Developer
          </div>
          <div className="text-8xl font-semibold" style={{ color: "#FFFFFF" }}>
            Harold Cuico
          </div>
        </div>
        <div className="w-2/5 ">
          <img src={logo} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
