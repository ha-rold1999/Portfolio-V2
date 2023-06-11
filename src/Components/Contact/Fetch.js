export default function Post(data, reset, setIsSubmited) {
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
      reset();
      setIsSubmited(true);
      setTimeout(() => {
        setIsSubmited(false);
      }, 2000);
    })
    .catch((err) => console.log(err));
}
