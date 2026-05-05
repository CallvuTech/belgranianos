document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const honeypot = e.target.querySelector('input[name="website"]').value;
  const status = document.getElementById('form-status');
  const btn = document.getElementById('submit-btn');

  if (!nombre || !email || !mensaje) {
    status.textContent = 'Por favor completá todos los campos.';
    status.className = 'error';
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Enviando...';
  status.textContent = '';
  status.className = '';

  try {
    const res = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, mensaje, website: honeypot }),
    });

    if (res.ok) {
      status.textContent = '¡Mensaje enviado! Te respondemos a la brevedad.';
      status.className = 'success';
      e.target.reset();
    } else {
      status.textContent = 'Hubo un error al enviar. Escribinos a contacto@belgranianos.com.ar';
      status.className = 'error';
    }
  } catch {
    status.textContent = 'Sin conexión. Escribinos a contacto@belgranianos.com.ar';
    status.className = 'error';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar mensaje';
  }
});
