const API = "http://localhost:3006/users";

document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message");
  msg.innerText = "";

  axios.get(`${API}?email=${email}`)
    .then(res => {
      if (res.data.length > 0) {
        msg.innerText = "Email already registered.";
      } else {
        axios.post(API, { name, email })
          .then(() => msg.innerText = "Registration successful!");
      }
    });
});
