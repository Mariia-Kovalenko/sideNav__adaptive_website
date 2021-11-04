"use strict";

const hideNav = document.getElementById('hide-nav');
const expandNav = document.getElementById('expand-nav');
const navigation = document.querySelector('.nav');
const navigationLink = document.querySelectorAll('.nav__link');

// const mediaQuery = window.matchMedia('(max-width: 992px)');
// const logoText = document.querySelector('.logo__text');
// const profileName = document.querySelector('.profile__name');
// const profilePhoto = document.querySelector('.profile__photo');


hideNav.addEventListener('click', () => {
    navigation.classList.add('narrow');
    hideNav.classList.add('hide');
    expandNav.classList.remove('hide');

    [].forEach.call(navigationLink, function(link){
        link.classList.add('hide');
    });

    // console.log('hiding nav');
});

expandNav.addEventListener('click', () => {
    navigation.classList.remove('narrow');
    expandNav.classList.add('hide');
    hideNav.classList.remove('hide');

    [].forEach.call(navigationLink, function(link){
        link.classList.remove('hide');
    });
    // console.log('expand nav');
});

// if (mediaQuery.matches){
//     navigation.classList.add('narrow');
//     logoText.classList.add('small-logo');
//     profileName.classList.add('hide');
//     profilePhoto.classList.add('small-photo');
// }