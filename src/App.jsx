import Header from "./Components/Header/Header";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Header />
      <About />
      <div
        className="max-w-screen-2xl h-screen  py-2  md:px-20 overflow-hidden flex flex-row px-4"
        id="about"
        style={{ backgroundColor: "#706C61" }}
      >
        <div></div>
      </div>
    </>
  );
}

export default App;
