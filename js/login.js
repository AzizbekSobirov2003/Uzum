document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstname = document.getElementById("ism").value.trim();
  const lastname = document.getElementById("familiya").value.trim();
  const tel = document.getElementById("tel").value.trim();
  // const btnSubmit = document.getElementById("btn_submit");

  if (!firstname || !lastname || !tel) {
    alert("Iltimos barchasini toldiring");
    return;
  }

  window.location.href = "./pages/home/home.html";
});
