let url = "https://catfact.ninja/fact";

for (i = 0; i < 5; i++) {
  fetch(url)
    .then((res) => {
    //   console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log("data: " + data.fact);
    })
    .catch((err) => {
      console.log("--!Fetch Error!-- " + err);
    });
}
