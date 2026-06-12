// Menú de navegación en móvil

// Busca el botón que abre y cierra el menú.
const menuButton = document.querySelector(".menu-toggle");

// Busca el menú principal de navegación.
const mainNav = document.querySelector(".main-nav");

// Comprueba que el botón y el menú existen antes de usarlos.
if (menuButton && mainNav) {

  // Cuando se pulsa el botón del menú, se abre o se cierra el menú móvil.
  menuButton.addEventListener("click", function () {

    // Añade o quita la clase is-open.
    // Esta clase es la que muestra el menú en pantalla.
    mainNav.classList.toggle("is-open");

    // Comprueba si el menú está abierto.
    const menuAbierto = mainNav.classList.contains("is-open");

    // Actualiza el atributo aria-expanded para accesibilidad.
    menuButton.setAttribute("aria-expanded", String(menuAbierto));
  });

  // Busca todos los enlaces que hay dentro del menú.
  const enlacesMenu = mainNav.querySelectorAll("a");

  // Recorre todos los enlaces del menú.
  enlacesMenu.forEach(function (enlace) {

    // Cuando se pulsa un enlace, el menú móvil se cierra.
    enlace.addEventListener("click", function () {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Modal de confirmación

// Busca el modal que aparece al enviar un formulario.
const modalFormulario = document.querySelector("#modal-formulario");

// Busca el botón para cerrar el modal.
const cerrarModal = document.querySelector("#cerrar-modal");

// Función para abrir el modal.
function abrirModal() {
  if (modalFormulario) {
    modalFormulario.hidden = false;
  }
}

// Función para cerrar el modal.
function cerrarModalFormulario() {
  if (modalFormulario) {
    modalFormulario.hidden = true;
  }
}

// Si existe el botón de cerrar, se le añade el evento de clic.
if (cerrarModal) {
  cerrarModal.addEventListener("click", cerrarModalFormulario);
}

// Permite cerrar el modal al pulsar sobre el fondo oscuro.
if (modalFormulario) {
  modalFormulario.addEventListener("click", function (evento) {

    // Solo se cierra si se pulsa fuera de la caja del mensaje.
    if (evento.target === modalFormulario) {
      cerrarModalFormulario();
    }
  });
}

// Formulario "Envía tu propuesta"

// Busca el formulario de propuesta.
const formularioPropuesta = document.querySelector("#formulario-propuesta");

// Solo se ejecuta esta parte si el formulario existe en la página.
if (formularioPropuesta) {

  // Campos del formulario de propuesta.
  const nombrePropuesta = document.querySelector("#nombre-propuesta");
  const apellidosPropuesta = document.querySelector("#apellidos-propuesta");
  const correoPropuesta = document.querySelector("#correo-propuesta");
  const telefonoPropuesta = document.querySelector("#telefono-propuesta");
  const tipoPropuesta = document.querySelector("#tipo-propuesta");
  const mensajePropuesta = document.querySelector("#mensaje-propuesta");
  const legalPropuesta = document.querySelector("#legal-propuesta");
  const botonPropuesta = document.querySelector("#boton-propuesta");

  // Checkboxes del perfil del participante.
  const checksPerfil = document.querySelectorAll('input[name="perfil"]');

  // Mensajes de error del formulario de propuesta.
  const errorNombrePropuesta = document.querySelector("#error-nombre-propuesta");
  const errorApellidosPropuesta = document.querySelector("#error-apellidos-propuesta");
  const errorCorreoPropuesta = document.querySelector("#error-correo-propuesta");
  const errorTelefonoPropuesta = document.querySelector("#error-telefono-propuesta");
  const errorTipoPropuesta = document.querySelector("#error-tipo-propuesta");
  const errorPerfilPropuesta = document.querySelector("#error-perfil-propuesta");
  const errorMensajePropuesta = document.querySelector("#error-mensaje-propuesta");
  const errorLegalPropuesta = document.querySelector("#error-legal-propuesta");

  // Elimina espacios al principio y al final de un texto.
  function limpiarTexto(valor) {
    return valor.trim();
  }

  // Comprueba si hay al menos un perfil seleccionado.
  function perfilSeleccionado() {
    let hayPerfil = false;

    checksPerfil.forEach(function (check) {
      if (check.checked) {
        hayPerfil = true;
      }
    });

    return hayPerfil;
  }

  // Escribe un mensaje de error en el elemento indicado.
  function escribirError(elemento, mensaje) {
    if (elemento) {
      elemento.textContent = mensaje;
    }
  }

  // Valida todos los campos del formulario de propuesta.
  function validarFormularioPropuesta(mostrarErrores) {
    let formularioCorrecto = true;

    // Comprueba el nombre.
    if (limpiarTexto(nombrePropuesta.value) === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorNombrePropuesta, "El nombre es obligatorio.");
      }
    } else {
      escribirError(errorNombrePropuesta, "");
    }

    // Comprueba los apellidos.
    if (limpiarTexto(apellidosPropuesta.value) === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorApellidosPropuesta, "Los apellidos son obligatorios.");
      }
    } else {
      escribirError(errorApellidosPropuesta, "");
    }

    // Comprueba el correo.
    if (limpiarTexto(correoPropuesta.value) === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorCorreoPropuesta, "El correo es obligatorio.");
      }
    } else if (!correoPropuesta.value.includes("@")) {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorCorreoPropuesta, "El correo debe contener una arroba (@).");
      }
    } else {
      escribirError(errorCorreoPropuesta, "");
    }

    // Comprueba el teléfono.
    if (limpiarTexto(telefonoPropuesta.value) === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorTelefonoPropuesta, "El teléfono es obligatorio.");
      }
    } else {
      escribirError(errorTelefonoPropuesta, "");
    }

    // Comprueba que se haya seleccionado un tipo de propuesta.
    if (tipoPropuesta.value === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorTipoPropuesta, "Selecciona un tipo de propuesta.");
      }
    } else {
      escribirError(errorTipoPropuesta, "");
    }

    // Comprueba que se haya marcado al menos un perfil.
    if (!perfilSeleccionado()) {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorPerfilPropuesta, "Selecciona al menos una opción.");
      }
    } else {
      escribirError(errorPerfilPropuesta, "");
    }

    // Comprueba el mensaje.
    if (limpiarTexto(mensajePropuesta.value) === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorMensajePropuesta, "El mensaje es obligatorio.");
      }
    } else {
      escribirError(errorMensajePropuesta, "");
    }

    // Comprueba que se acepten las condiciones legales.
    if (!legalPropuesta.checked) {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirError(errorLegalPropuesta, "Debes aceptar las condiciones legales del festival.");
      }
    } else {
      escribirError(errorLegalPropuesta, "");
    }

    // Activa o desactiva el botón según si el formulario está correcto.
    botonPropuesta.disabled = !formularioCorrecto;

    // Devuelve si el formulario está correcto o no.
    return formularioCorrecto;
  }

  // Revisa el formulario mientras el usuario escribe o cambia opciones.
  function revisarFormularioPropuestaMientrasEscribe() {

    // Valida sin mostrar todos los errores desde el principio.
    validarFormularioPropuesta(false);

    // Muestra el error del correo mientras se escribe si falta la arroba.
    if (correoPropuesta.value !== "" && !correoPropuesta.value.includes("@")) {
      escribirError(errorCorreoPropuesta, "El correo debe contener una arroba (@).");
    }

    // Si se acepta el aviso legal, se borra su error.
    if (legalPropuesta.checked) {
      escribirError(errorLegalPropuesta, "");
    }
  }

  // Lista de campos del formulario de propuesta.
  const camposPropuesta = [
    nombrePropuesta,
    apellidosPropuesta,
    correoPropuesta,
    telefonoPropuesta,
    tipoPropuesta,
    mensajePropuesta,
    legalPropuesta
  ];

  // Añade eventos a cada campo para revisar el formulario al escribir o cambiar algo.
  camposPropuesta.forEach(function (campo) {
    campo.addEventListener("input", revisarFormularioPropuestaMientrasEscribe);
    campo.addEventListener("change", revisarFormularioPropuestaMientrasEscribe);
  });

  // Añade eventos a los checkboxes del perfil.
  checksPerfil.forEach(function (check) {
    check.addEventListener("change", revisarFormularioPropuestaMientrasEscribe);
  });

  // Controla el envío del formulario de propuesta.
  formularioPropuesta.addEventListener("submit", function (evento) {

    // Evita que la página se recargue al enviar.
    evento.preventDefault();

    // Valida el formulario mostrando los errores.
    const formularioCorrecto = validarFormularioPropuesta(true);

    // Si está todo correcto, muestra el modal y limpia el formulario.
    if (formularioCorrecto) {
      abrirModal();
      formularioPropuesta.reset();
      botonPropuesta.disabled = true;
    }
  });

  // Valida el formulario al cargar la página para dejar el botón desactivado si falta algo.
  validarFormularioPropuesta(false);
}

// Formulario de newsletter

// Busca el formulario de newsletter.
const newsletterForm = document.querySelector("#newsletter-form");

// Solo se ejecuta esta parte si el formulario existe en la página.
if (newsletterForm) {

  // Campos del formulario de newsletter.
  const nombreNewsletter = document.querySelector("#nombre");
  const correoNewsletter = document.querySelector("#correo");
  const interesNewsletter = document.querySelector("#interes");
  const aceptoNewsletter = document.querySelector("#acepto");
  const botonNewsletter = document.querySelector("#boton-enviar");

  // Mensajes de error de la newsletter.
  const errorNombre = document.querySelector("#error-nombre");
  const errorCorreo = document.querySelector("#error-correo");
  const errorInteres = document.querySelector("#error-interes");
  const errorAcepto = document.querySelector("#error-acepto");

  // Escribe un mensaje de error en el formulario de newsletter.
  function escribirErrorNewsletter(elemento, mensaje) {
    if (elemento) {
      elemento.textContent = mensaje;
    }
  }

  // Valida todos los campos de la newsletter.
  function validarNewsletter(mostrarErrores) {
    let formularioCorrecto = true;

    // Comprueba el nombre.
    if (nombreNewsletter.value.trim() === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirErrorNewsletter(errorNombre, "El nombre es obligatorio.");
      }
    } else {
      escribirErrorNewsletter(errorNombre, "");
    }

    // Comprueba el correo.
    if (correoNewsletter.value.trim() === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirErrorNewsletter(errorCorreo, "El correo es obligatorio.");
      }
    } else if (!correoNewsletter.value.includes("@")) {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirErrorNewsletter(errorCorreo, "El correo debe contener una arroba (@).");
      }
    } else {
      escribirErrorNewsletter(errorCorreo, "");
    }

    // Comprueba el campo de interés o mensaje.
    if (interesNewsletter.value.trim() === "") {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirErrorNewsletter(errorInteres, "Selecciona un interés.");
      }
    } else {
      escribirErrorNewsletter(errorInteres, "");
    }

    // Comprueba que se acepten los términos legales.
    if (!aceptoNewsletter.checked) {
      formularioCorrecto = false;

      if (mostrarErrores) {
        escribirErrorNewsletter(errorAcepto, "Debes aceptar los términos legales.");
      }
    } else {
      escribirErrorNewsletter(errorAcepto, "");
    }

    // Activa o desactiva el botón según si el formulario está correcto.
    botonNewsletter.disabled = !formularioCorrecto;

    // Devuelve si el formulario está completo.
    return formularioCorrecto;
  }

  // Revisa la newsletter mientras se escribe.
  function revisarNewsletterMientrasEscribe() {

    // Valida sin mostrar todos los errores desde el principio.
    validarNewsletter(false);

    // Muestra el error de correo si se ha escrito algo pero falta la arroba.
    if (correoNewsletter.value !== "" && !correoNewsletter.value.includes("@")) {
      escribirErrorNewsletter(errorCorreo, "El correo debe contener una arroba (@).");
    }
  }

  // Lista de campos de la newsletter.
  const camposNewsletter = [
    nombreNewsletter,
    correoNewsletter,
    interesNewsletter,
    aceptoNewsletter
  ];

  // Añade eventos a los campos de la newsletter.
  camposNewsletter.forEach(function (campo) {
    campo.addEventListener("input", revisarNewsletterMientrasEscribe);
    campo.addEventListener("change", revisarNewsletterMientrasEscribe);
  });

  // Controla el envío de la newsletter.
  newsletterForm.addEventListener("submit", function (evento) {

    // Evita que la página se recargue.
    evento.preventDefault();

    // Valida mostrando los errores.
    const formularioCorrecto = validarNewsletter(true);

    // Si está correcto, muestra el modal y limpia el formulario.
    if (formularioCorrecto) {
      abrirModal();
      newsletterForm.reset();
      botonNewsletter.disabled = true;
    }
  });

  // Valida al cargar para que el botón empiece desactivado si falta algo.
  validarNewsletter(false);
}