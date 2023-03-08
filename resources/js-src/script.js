/*!
 * Script Js
 *
 *
 * Copyright 2022
 */

import Common from './custom/common';
import Header from './custom/header';
import Glide from './libs/_1_glide_carousel';
import AOS from './libs/_2_aos';

window.addEventListener('load', (e) => {
    Common.init();
    Header.init();
    AOS.init();
});

if (document.querySelector('.glide')) {
    new Glide('.glide', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 2,
        rewind: true,
    }).mount();
}

if (document.querySelector('.director')) {
    new Glide('.director', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 1,
        rewind: true,
    }).mount();
}

if (document.querySelector('.testimonial')) {
    new Glide('.testimonial', {
        animationDuration: 1000,
        autoplay: 3000,
        perView: 1,
        rewind: true,
    }).mount();
}
