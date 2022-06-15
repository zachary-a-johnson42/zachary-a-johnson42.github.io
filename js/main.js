'use strict';
//Get Local Storage Preferences???
localStorage.getItem('theme');

//Get Button for Dropdown of elements
let themeButton = document.getElementById('theme');
//Get ul to hide and display
let themeList = document.getElementById('theme-select')

//Theme Choices for the website
let lightTheme = document.getElementById('light-theme');
let darkTheme = document.getElementById('dark-theme');
let accessibleTheme = document.getElementById('accessible-theme');

//On Click, dropdown my themes ul, if clicked again, hide dropdown..
themeButton.addEventListener("click", function(status) {
    if (themeList.style.display === 'none') {
        themeList.style.display = 'block';
    } else {
        themeList.style.display = 'none';
    }
});

lightTheme.addEventListener('click', function(){
    document.documentElement.setAttribute('data-theme', 'none');
    themeList.style.display = 'none';
})

darkTheme.addEventListener('click', function (){
    document.documentElement.setAttribute('data-theme', 'dark')
    themeList.style.display = 'none';
})

accessibleTheme.addEventListener('click', function(){
    document.documentElement.setAttribute('data-theme', 'accessible')
    themeList.style.display = 'none'
})