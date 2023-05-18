
const menuBtn = document.querySelector('.menu-btn-tonggle');
const topNav = document.querySelector('.top-nav');

document.addEventListener('DOMContentLoaded', function() {

// tongle button for menu 





// tongle menuBtn for visibility of .top-nav 
menuBtn.addEventListener('click', () => {
    // tongle using display none/block
    topNav.style.display = topNav.style.display === 'block' ? 'none' : 'block';

    // menuBtn text change
    menuBtn.textContent = menuBtn.textContent === 'Close' ? 'Menu' : 'Close';
    
}
);

});