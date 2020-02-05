//Animation du about tree
const items = document.querySelectorAll('#about li');

if (window.matchMedia("(max-width: 470px)").matches) {
  const isInViewport = el => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  
  const run = () =>
    items.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('show');
      }
    });
    // Events
    window.addEventListener('load', run);
    window.addEventListener('resize', run);
    window.addEventListener('scroll', run);
}

//Burger menu 
let burgerMenu = document.getElementById('burger-menu');
let navFlex = document.getElementById('nav-flex');

 function toggleMenu(){
  navFlex.classList.toggle('hidden');
};

burgerMenu.addEventListener("click", toggleMenu, false);

if (window.matchMedia("(max-width: 720px)").matches) {
    for(const liste of document.querySelectorAll('#responsive-navbar>ul>li')){
      liste.addEventListener('click', toggleMenu, false);
    }

}