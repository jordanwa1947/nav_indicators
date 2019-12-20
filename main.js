var navLinks = document.getElementById('nav-link-list');

navLinks.addEventListener('click', indicateClick);

function indicateClick() {
  var links = event.target.parentElement.childNodes;
  for (var i = 0; i < links.length; i++) {
    if(links[i].nodeType === 1) {
      links[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}
