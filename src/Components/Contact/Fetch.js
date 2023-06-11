import Swal from "sweetalert2";

export default function Post(data, reset, isSending, setIsSending) {
  fetch("https://sheetdb.io/api/v1/3lmclujnx5064", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: data.name,
      Email: data.email,
      Message: data.message,
    }),
  })
    .then((res) => res.json())
    .then(() => {
      setIsSending(false);
      reset();
      Swal.fire("Message sent", "", "success");
    })
    .catch((err) => console.log(err));
}
