const menuItems = document.querySelectorAll('.top-nav-menu a[href^="#"]');
const arrowItem = document.querySelector('.about-section a[href^="#"]');
const contactBtn = document.querySelector('.top-nav .contact-btn');

// const menuItems = document.querySelectorAll('a[href^="#"]');


menuItems.forEach(item => {
    item.addEventListener('click', prepareForScroll);
})
arrowItem.addEventListener('click', prepareForScroll);
contactBtn.addEventListener('click', (e) => e.preventDefault()); //Did this so the button does not work when clicked.


function prepareForScroll(e) {
    e.preventDefault();

    const href = this.getAttribute('href');
    const elemToOffset = document.querySelector(href).offsetTop; //the offset of the section that will scroll to top;
    const headerHeight = document.querySelector('.header-container').offsetHeight; //total height of the fixed header elem;

    let totalTop = elemToOffset - headerHeight; //total top is defined to subtract header total height;


    smoothScrollTo(totalTop, 700);

    //Close Mobile menu after you clicked in a link on the mobile version;
    closeMobileMenu();
}

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset; //the number of pixels that the document is currently scrolled vertically;
    const distanceY = endY - startY; //(the top of the document - menu Height) - total of pixels from the element to top;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400; //setting the duration

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(0, newY);
    }, 1000 / 60); // 60 fps
};

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