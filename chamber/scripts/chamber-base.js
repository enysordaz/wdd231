// Menu button
const hamburgerMenu = document.querySelector('#myButton');
const navElement = document.querySelector('#animateMe');

hamburgerMenu.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerMenu.classList.toggle('open');
});

// Footer dates and update
const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

// getting the last day modified  
const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = document.lastModified;