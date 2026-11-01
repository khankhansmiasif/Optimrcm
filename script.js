const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Consultation request — Optim RCM Billing');
  const body = encodeURIComponent(
`Name: ${data.get('name') || ''}
Practice: ${data.get('practice') || ''}
Email: ${data.get('email') || ''}
Phone: ${data.get('phone') || ''}
Interested service: ${data.get('service') || ''}

Message:
${data.get('message') || ''}

Please do not include patient health information.`
  );
  // Update this address to your confirmed company inbox before publishing.
  window.location.href = `mailto:info@optimrcmbilling.com?subject=${subject}&body=${body}`;
});
