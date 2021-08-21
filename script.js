const menuItems = document.querySelectorAll('.top-nav-menu a[href^="#"]');
const arrowItem = document.querySelector('.about-section a[href^="#"]');
const contactBtn = document.querySelector('.top-nav .contact-btn');

menuItems.forEach(item => {
    item.addEventListener('click', smoothScroll);
})
arrowItem.addEventListener('click', smoothScroll);
contactBtn.addEventListener('click', (e) => e.preventDefault());

function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    console.log(href);

    const offsetTop = document.querySelector(href).offsetTop;

    scroll({top: offsetTop, behavior: "smooth"});
}