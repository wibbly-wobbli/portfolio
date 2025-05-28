/*--==== Show Menu ====--*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// Show Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide Menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu on link click (for mobile)
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));


/*--==== Menu Show ====--*/
/* Validate if constant exists */

/*--==== Remove Menu Mobile ====--*/

/*--==== Scroll Sections Active Link ====--*/

/*--==== Change Background Header ====--*/
function scrollHeader() {
    const header = document.getElementById('header');
    //when the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*--==== Show Scroll Up ====--*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is greater than 350 viewport height, show the show-scroll class to scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*--==== About Tabs ====--*/
const tabs = document.querySelectorAll('[data-target]'), 
    tabContents = document.querySelectorAll('[data-content]'); 
 
    tabs.forEach((tab) => {
     tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
    
    tabContents.forEach((tabContent) => {
     tabContent.classList.remove('tab__active');
    });

    target.classList.add('tab__active');

    tabs.forEach((tab) => {
        tab.classList.remove('tab__active');
    });

    tab.classList.add('tab__active');
    });
 });

/*--==== Contact Form ====--*/
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {
    e.preventDefault();

    // check if the field has a value
    if (contactName.value === '' || 
        contactEmail.value === '' || 
        contactSubject.value === '' || 
        contactMessage.value === ''
    ) {
        //show message
        errorMessage.textContent = 'Write all the input fields';
    }

    else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm(
            'service_h80f629',
            'template_9mjhdtd',
            '#contact-form',
            'zUac8CtyLmXkJpCfb'
        ).then(() => {
            //show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent successfully ✓';

            //remove message after 5 seconds
            setTimeout(() => {
                errorMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert ('OOPS! Something went wrong...', error);
        }
    );

    //clear input fields
    contactName.value = '';
    contactEmail.value = '';
    contactSubject.value = '';
    contactMessage.value = '';

    }
};

contactForm.addEventListener('submit', sendEmail);
