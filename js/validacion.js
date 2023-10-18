document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto

      const nombreField = document.getElementById("nombre");
      const apellidoField = document.getElementById("apellido");
      const emailField = document.getElementById("email");
      const password1Field = document.getElementById("password1");
      const password2Field = document.getElementById("password2");
      const checkbox = document.getElementById("terminos");
      const botonTerminos = document.getElementById("terminosServicio");

      // Función para mostrar un mensaje de alerta
      function showError(input, message) {
        input.classList.add("is-invalid"); // Agrega clase de Bootstrap para resaltar el campo
        const alertDiv = document.createElement("div");
        alertDiv.className = "invalid-feedback";
        alertDiv.textContent = message;
        input.parentNode.appendChild(alertDiv);
      }

      // Función para mostrar un mensaje de éxito
      function showSuccess(input) {
        input.classList.remove("is-invalid"); // Elimina la clase de Bootstrap para resaltar el campo
        input.classList.add("is-valid"); // Agrega clase de Bootstrap para indicar éxito

        const successDiv = document.createElement("div");
        successDiv.className = "valid-feedback";

        input.parentNode.appendChild(successDiv);
      }

      // Validar y quitar mensajes de alerta previos
      const feedbackElements = document.querySelectorAll(".invalid-feedback, .valid-feedback");
      feedbackElements.forEach((element) => element.remove());
      if(!checkbox.checked){
        showError(botonTerminos, "Acepta los terminos y condiciones")
      }
      if(!checkbox.checked){
        showError(checkbox);
      } else {
        showSuccess(checkbox)
      }

      if (nombreField.value.trim() === "") {
        showError(nombreField, "Debe ingresar un nombre");
      } else {
        showSuccess(nombreField);
      }

      if (apellidoField.value.trim() === "") {
        showError(apellidoField, "Debe ingresar un apellido");
      } else {
        showSuccess(apellidoField);
      }

      if (emailField.value.trim() === "") {
        showError(emailField, "Debe ingresar un correo electrónico");
      } else {
        showSuccess(emailField);
      }

      if (password1Field.value.trim() === "") {
        showError(password1Field, "Debe ingresar una contraseña");
    } else if (password1Field.value.trim().length < 6) {
        showError(password1Field, "La contraseña debe tener al menos 6 caracteres");
    } else {
        showSuccess(password1Field);
    
        if (password2Field.value.trim() === "") {
            showError(password2Field, "Debe repetir la contraseña");
        } else if (password2Field.value.trim().length < 6) {
            showError(password2Field, "La contraseña debe tener al menos 6 caracteres");
        } else if (password1Field.value !== password2Field.value) {
            showError(password2Field, "Las contraseñas no coinciden");
        } else {
            showSuccess(password2Field);
        }
    }
      // Si todos los campos están validados, puedes enviar el formulario
      if (document.querySelectorAll(".is-invalid").length === 0) {
        // form.submit(); // Descomenta esta línea para enviar el formulario
      }
    });
  });

  nombre.classList.remove("is-invalid");
  apellido.classList.remove("is-invalid");
  email.classList.remove("is-invalid");
  password1.classList.remove("is-invalid");
  password2.classList.remove("is-invalid");
  terminosError.style.display = "none";
  