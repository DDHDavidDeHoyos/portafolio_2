(function () {
  emailjs.init("ewZ_uvxVsdLOuCOsS");
})();

const user_email = document.querySelector("#user_email");
const user_name = document.querySelector("#user_name");
const message = document.querySelector("#message");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_x7xbkkj", "template_6vyy97c", this).then(
      function () {
        alert("Mensaje enviado con éxito!");
        user_email.value = "";
        user_name.value = "";
        message.value = "";
      },
      function (error) {
        alert("Error en el envío: " + JSON.stringify(error));
      }
    );
  });

const btn_menu = document.querySelector("#btn_menu");
const cont_menu = document.querySelector("#cont_menu");

btn_menu.addEventListener("click", () => {
  if (cont_menu.className === "hidden") {
    cont_menu.className = "flex justify-center py-5";
    btn_menu.src = "./img/x.svg";
  } else {
    cont_menu.className = "hidden";
    btn_menu.src = "./img/menu.svg";
  }
});
