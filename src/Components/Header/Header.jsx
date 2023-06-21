import Home from "./Home";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="h-screen  pt-2  md:px-20 overflow-hidden">
      <NavBar />
      <Home />
    </div>
  );
}
