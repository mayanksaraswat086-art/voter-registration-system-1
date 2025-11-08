document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page-content');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const registerCta = document.getElementById('register-cta');

  // Toggle Mobile Menu
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Navigation between pages
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetPage = this.dataset.page;

      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      pages.forEach(page => page.classList.add('hidden'));
      const target = document.getElementById(`${targetPage}-page`);
      target.classList.remove('hidden');
      target.classList.add('slide-in');
      mobileMenu.classList.add('hidden');
    });
  });

  // CTA "Register Now"
  registerCta.addEventListener('click', () => {
    document.querySelector('[data-page="register"]').click();
  });

  // Registration Form Validation
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    let isValid = true;

    const fields = [
      ['full-name', 'name-error'],
      ['dob', 'dob-error'],
      ['gender', 'gender-error'],
      ['address', 'address-error'],
      ['id-number', 'id-error'],
      ['photo', 'photo-error']
    ];

    // Reset errors
    document.querySelectorAll('.error').forEach(el => el.classList.add('hidden'));

    fields.forEach(([id, errorId]) => {
      const value = document.getElementById(id).value.trim();
      if (!value) {
        document.getElementById(errorId).classList.remove('hidden');
        isValid = false;
      }
    });

    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('email-error').classList.remove('hidden');
      isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
      document.getElementById('phone-error').classList.remove('hidden');
      isValid = false;
    }

    if (isValid) {
      alert('Registration submitted successfully!');
      form.reset();
    }
  });
});
