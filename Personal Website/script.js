const message =
  "You have received this message because you have been chosen to open an important page. ";
const firstWord = "Hi,";
const secondWord = "Welcome,";
const thirdWord = "Greetings to my first personal page!";

alert(message + " " + firstWord + " " + secondWord + " " + thirdWord);

const form = document.querySelector("#my-form");
const submitButton = document.querySelector("#submit");
const scriptURL =
  "https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec";

form.addEventListener("submit", (e) => {
  submitButton.disabled = true;
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: "POST", body: requestBody })
    .then((response) => {
      alert("Success!", response);
      submitButton.disabled = false;
    })
    .catch((error) => {
      alert("Error!", error.message);
      submitButton.disabled = false;
    });
});
