const whatsappToggle = document.getElementById('whatsapp-toggle');
const floatingWhatsapp = document.getElementById('floating-whatsapp');

if (whatsappToggle && floatingWhatsapp) {
  whatsappToggle.addEventListener('click', () => {
    floatingWhatsapp.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    const clickedInside = floatingWhatsapp.contains(event.target);
    if (!clickedInside) {
      floatingWhatsapp.classList.remove('open');
    }
  });
}
