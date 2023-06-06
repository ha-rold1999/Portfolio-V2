import Home from "./Home";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="w-screen h-screen  pt-2  md:px-20">
      <NavBar />
      <Home />
    </div>
  );
}
