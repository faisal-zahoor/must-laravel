/*!
 * Header js
 *
 *
 * Copyright 2022
 */
export class Header {
    constructor() {
        this.siteHeader = '.site-header';
        this.navbarToggler = '.navbar-toggler, .navbar-toggler *';
        this.stickyHeader = 'stickyHeader';
        this.activeClass = 'active';
        this.body = 'body';
        this.show = 'show';
        this.homePage = '.home-page';
    }

    init() {
        let ThisClass = this,
            bodyEl = document.querySelectorAll(this.body)[0],
            siteHeaderEl = document.querySelectorAll(this.siteHeader)[0],
            landingPageEl = document.querySelector('body'),
            navbarToggleEl = document.querySelectorAll(this.navbarToggler)[0];

        document.addEventListener(
            'scroll',
            (e) => {
                if (landingPageEl !== null) {
                    // Class Toggle on Scroll
                    if (window.pageYOffset > 100) {
                        bodyEl.classList.add(ThisClass.stickyHeader);
                    } else {
                        bodyEl.classList.remove(ThisClass.stickyHeader);
                    }
                }
            },
            false
        );

        // Smooth Scroll
        // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        //     anchor.addEventListener('click', function (e) {
        //         e.preventDefault();
        //         document.querySelector(this.getAttribute('href')).scrollIntoView({
        //             behavior: 'smooth',
        //         });
        //     });
        // });
    }
}

export default new Header();
