var navLinks = document.getElementById('nav-link-list');

navLinks.addEventListener('click', indicateClick);

function indicateClick() {
  event.target.classList.add('selected');
}
