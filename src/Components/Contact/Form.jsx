import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Post from "./Fetch";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Form() {
  const [isSending, setIsSending] = useState(true);
  const schema = yup.object().shape({
    name: yup.string().required("Your Name is Required"),
    email: yup
      .string()
      .email("Email Invalid")
      .required("Your Email is Required"),
    message: yup.string().required("Your Message is Requred"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    setIsSending(true);
    Swal.fire({ title: "Sending Details", showConfirmButton: false });
    Post(data, reset, isSending, setIsSending);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full lg:w-3/5 h-full pt-2 space-y-2 flex flex-col"
    >
      <input
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white focus:outline-none"
        placeholder="Your Name"
        {...register("name")}
      />
      <span className="text-red-600">{errors.name?.message}</span>
      <input
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white focus:outline-none"
        placeholder="Your Email"
        {...register("email")}
      />
      <span className="text-red-600">{errors.email?.message}</span>
      <textarea
        className="w-full text-xl bg-lightGrey rounded-md px-2 py-1 text-white focus:outline-none"
        rows={9}
        placeholder="Your Meassage"
        {...register("message")}
      />
      <span className="text-red-600">{errors.message?.message}</span>
      <input
        type="submit"
        title="Submit"
        className="w-fit px-10 py-2 border-2 border-black rounded-xl text-xl font-bold 
            text-black cursor-pointer hover:text-white hover:bg-black transition-colors 
            duration-300"
      />
    </form>
  );
}
