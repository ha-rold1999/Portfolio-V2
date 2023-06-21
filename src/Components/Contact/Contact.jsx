import Info from "./Info";
import Form from "./Form";

export default function Contact() {
  return (
    <div
      className=" h-auto   py-2  md:px-20 overflow-hidden flex flex-col px-4"
      id="contact"
    >
      <div className="w-full h-full flex flex-col lg:flex-row">
        <Info />
        <Form />
      </div>
    </div>
  );
}
