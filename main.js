var navLinks = document.getElementById('nav-link-list');
// refer to line 54 that loads initial page collectionsHTML
// after the collectionsHTML variable is defined
changePageContent('Collections', collectionsHTML);
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
      changePageContent(linkText, coursesHTML);
    break;
    case 'Collections':
      changePageContent(linkText, collectionsHTML);
    break;
    case 'Wishlist':
      changePageContent(linkText, wishlistHTML);
    break;
    case 'Archived':
      changePageContent(linkText, archivedHTML);
    break;
  }
}

function changePageContent(linkText, pageContent) {
  var pageBody = document.querySelector('main');
  pageBody.innerHTML = `<h2 class="text-header">${linkText}</h2> ${pageContent}`
}

var coursesHTML = `<p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum. </p>`

var collectionsHTML = `<p class="text"> elementum nisi quis. Iaculis at erat pellentesque
adipiscing commodo elit at imperdiet. Rhoncus dolor purus non enim praesent
elementum facilisis leo vel. Ut aliquam purus sit amet luctus venenatis. Nam
aliquam sem et tortor consequat id porta nibh. Ipsum dolor sit amet consectetur
adipiscing elit pellentesque habitant. Sagittis orci a scelerisque purus semper
eget duis. Turpis egestas pretium aenean pharetra magna. </p>`

changePageContent('Collections', collectionsHTML);

var wishlistHTML = `<p class="text"> Quo ubique aliquid ex, recusabo signiferumque ut sit.
Id usu erat suscipit reformidans, mea quot utinam ei, eligendi percipit ea pri.
Vis no quando nostro scaevola, usu scripta patrioque referrentur ad. In conceptam
ullamcorper qui, has exerci maiorum albucius eu. Affert inimicus quo et, has ne
utroque petentium. Eum ea illum nominati omittantur.</p>`

var archivedHTML = `<p class="text"> Stet dolor forensibus mea ex. Mel nisl lobortis ut, id
habeo simul mea. Mutat accusamus adipiscing ad eam. Cetero vocibus prodesset
duo ne, quo odio congue consequuntur et. </p>`
