const whatsappToggle = document.getElementById('whatsapp-toggle');
const floatingWhatsapp = document.getElementById('floating-whatsapp');

if (whatsappToggle && floatingWhatsapp) {
  whatsappToggle.addEventListener('click', () => {
    const isOpen = floatingWhatsapp.classList.toggle('open');
    whatsappToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', (event) => {
    if (!floatingWhatsapp.contains(event.target)) {
      floatingWhatsapp.classList.remove('open');
      whatsappToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
