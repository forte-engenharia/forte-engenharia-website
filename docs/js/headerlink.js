const navLinks = document.querySelectorAll('.header__link');
let currentPage = window.location.pathname;

if (currentPage === '') {
  currentPage = '/';
}

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('header__link--active');
  }
});
