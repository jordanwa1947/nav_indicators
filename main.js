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
  customizePageContent(event.target.innerText);
}

function customizePageContent(linkText) {
  switch(linkText) {
    case 'All Courses':
console.log(linkText);
    break;
    case 'Collections':
console.log(linkText);
    break;
    case 'Wishlist':
console.log(linkText);
    break;
    case 'Archived':
console.log(linkText);
    break;
  }
}

function changePageContent(linkText, pageContent) {
  var pageBody = document.querySelector('main');
  pageBody.innerHTML = `<h2>${linkText}</h2> ${pageContent}`
}
