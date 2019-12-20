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
  changePageContent(event.target.innerText);
}

function changePageContent(linkText) {
  var pageBody = document.querySelector('main');
  pageBody.innerHTML = `<h2>${linkText}</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </p>
  `
}
