import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <div
        className="max-w-screen-2xl h-screen  pt-2  md:px-20 overflow-hidden"
        id="about"
        style={{ backgroundColor: "#706C61" }}
      >
        <div className="w-full h-full bg-red-500"></div>
      </div>
    </>
  );
}

export default App;
