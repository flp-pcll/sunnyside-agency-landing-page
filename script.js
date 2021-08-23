const menuItems = document.querySelectorAll('.top-nav-menu a[href^="#"]');
const arrowItem = document.querySelector('.about-section a[href^="#"]');
const contactBtn = document.querySelector('.top-nav .contact-btn');

menuItems.forEach(item => {
    item.addEventListener('click', smoothScroll);
})
arrowItem.addEventListener('click', smoothScroll);
contactBtn.addEventListener('click', (e) => e.preventDefault()); //Did this so the button does not work when clicked.


//Smooth scroll between the page links:
function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const elemToOffset = document.querySelector(href).offsetTop; //the offset of the section that will scroll to top;
    const headerHeight = document.querySelector('.header-container').offsetHeight; //total height of the fixed header elem;

    let totalTop = elemToOffset - headerHeight; //total top is defined to subtract header total height;

    scroll({top: totalTop, behavior: "smooth"});

    //Close Mobile menu after you clicked in a link on the mobile version;
    closeMobileMenu();
}

/////////////////////////////////////////////

const mobileMenuIcon = document.querySelector('.mobile-menu-hamburger-icon');
const mobileMenu = document.querySelector('.top-nav-menu');

mobileMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(event) {
    mobileMenu.classList.toggle('top-nav-menu-active');
}

function closeMobileMenu() {
    mobileMenu.classList.remove('top-nav-menu-active');
}