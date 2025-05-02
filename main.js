/*--==== Show Menu ====--*/

/*--==== Menu Show ====--*/
/* Validate if constant exists */

/*--==== Remove Menu Mobile ====--*/

/*--==== Scroll Sections Active Link ====--*/

/*--==== Change Background Header ====--*/

/*--==== Show Scroll Up ====--*/

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