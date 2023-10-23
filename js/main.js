

//Make Browser on load to top
window.scrollTo({ top: 0, behavior: 'auto' });













//Add and Remove class active from nav-links
const navLinkEls = document.querySelectorAll('.nav-link-header');


navLinkEls.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});












//Start UpButton
const UpButton = document.querySelector(".UpButton");

window.onscroll = function(){
    if (window.scrollY >= 1000){
        UpButton.style.opacity = ".8";
    } else {
        UpButton.style.opacity = "0";
    };
};


UpButton.onclick = function () {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    });
  };
