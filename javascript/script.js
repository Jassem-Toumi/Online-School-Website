
// Changing Navbar style on scroll
// ========================================

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window,scrollY>20);
    if (window,scrollY<19){
        document.querySelector('nav').classList.remove('window-scroll')
    }
})




//   Show/Hide the Burger-Menu on Small devices
// ============================================


const menu = document.querySelector('.nav__menu')
const openBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')



openBtn.addEventListener('click', ()=>{
menu.classList.toggle('active__menu')
openBtn.classList.remove('activate-burger-btn')
closeBtn.classList.toggle('activate-burger-btn')
});

closeBtn.addEventListener('click', ()=>{
menu.classList.remove('active__menu')
openBtn.classList.toggle('activate-burger-btn')
closeBtn.classList.remove('activate-burger-btn') 
});




// Show/Hide the Search-Box for small screens
// ============================================================================== 

const search_box_Icon = document.querySelector('.search_icon')
const search_box_Window = document.querySelector('.search__section-Window')

search_box_Icon.addEventListener('click', () => {
search_box_Window.classList.toggle('activate__search-box-window')
})


// Close.Hide Search_Box

const close_searchBox_btn = document.querySelector('.close-searchBox-btn')

close_searchBox_btn.addEventListener('click', () => {
search_box_Window.classList.remove('activate__search-box-window')
} )





// Openinig the FAQs Answers
// ===========================================
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{

    faq.classList.toggle('open');

    // Chaning icon
    const icon = faq.querySelector('.faq__icon i');
    if(icon.className === 'bx bx-plus-circle'){
        icon.className ="bx bx-minus-circle"
    }
    else{
        icon.className ="bx bx-plus-circle"
    }
})

});


// Swiper engine 
// =============================================
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // Breakpoints for large screens
    breakpoints: {
        600:{
            slidesPerView:2
        },
        1000: {
            slidesPerView:3
        }
    }
  });





