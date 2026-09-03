const WHATSAPP_NUMBER = "3564659740";

const WHATSAPP_MESSAGE = "Hola, nos conocimos en el Club de Emprendedores. Quería seguir en contacto con Corsteno.";
const whatsappButton = document.querySelector("#whatsapp-button");
const whatsappNote = document.querySelector("#whatsapp-note");

whatsappButton.addEventListener("click", () => {
  if (!WHATSAPP_NUMBER.trim()) {
    whatsappNote.textContent = "El número de WhatsApp todavía no está configurado.";
    return;
  }

  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  const url = `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  window.location.href = url;
});
