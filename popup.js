
document.getElementById("apply").addEventListener("click", () => {
  fetch("http://localhost:3000/apply")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
});



