export default function Form() {
  return (
    <div className="w-full lg:w-3/5 h-full pt-2 space-y-2">
      <input
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white"
        placeholder="Your Name"
      />
      <input
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white"
        placeholder="Email"
      />
      <textarea
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white"
        rows={9}
        placeholder="Your Meassage"
      />
      <div
        className="w-fit px-10 py-2 border-2 border-black rounded-xl text-xl font-bold 
            text-black cursor-pointer hover:text-white hover:bg-black transition-colors 
            duration-300"
      >
        Submit
      </div>
    </div>
  );
}
