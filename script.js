function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing Animation
document.addEventListener('DOMContentLoaded', function () {
  const typedTarget = document.querySelector('#typed');
  if (typedTarget) {
    new Typed('#typed', {
      strings: [
        'Machine Learning',
        'Generative AI',
        'Data Analytics',
        'Backend Systems'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: '|'
    });
  }
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');

  // Check for saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      localStorage.setItem('theme', 'light');
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  });
});
