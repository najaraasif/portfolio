document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    const formMessages = document.getElementById('form-messages');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            formData.append('_next', window.location.href);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formMessages.textContent = 'Message sent successfully!';
                    formMessages.classList.add('success');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        formMessages.textContent = data.errors.map(error => error.message).join(', ');
                    } else {
                        formMessages.textContent = 'Oops! There was a problem sending your message.';
                    }
                    formMessages.classList.add('error');
                }
            } catch (error) {
                formMessages.textContent = 'Oops! An error occurred. Please try again later.';
                formMessages.classList.add('error');
            }
        });
    }
});

// JavaScript for interactive elements and dynamic content

// Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Typewriter effect for hero section
  const typewriterTextElement = document.getElementById('typewriter-text');
  const texts = ["Software Developer", "Web Developer", "App Developer", "Backend Developer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      typewriterTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typewriterTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeWriter, typingSpeed);
  }

  if (typewriterTextElement) {
        typeWriter();
    }

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }