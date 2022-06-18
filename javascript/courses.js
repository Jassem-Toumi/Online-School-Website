// =========== CATEGORY ============
const category__btn = document.querySelector('.category__btn')
const category__options = document.querySelector('.category__options')
const category__options_list = document.querySelectorAll('.category__options > li')
const category__btn_arrow = document.querySelector('.category__btn> i')

category__btn.addEventListener('click', ()=>{
    category__options.classList.toggle('checked')
    category__btn_arrow.classList.remove('.bxs-down-arrow')
    category__btn_arrow.classList.toggle('bxs-up-arrow')

});


/* Select and di-select filter options */ 
function active_category_item(){
    category__options_list.forEach(l => l.classList.remove('selected') )
  this.classList.add('selected')
}

category__options_list.forEach(l => l.addEventListener('click', active_category_item))




// =========== LEVEL ==============
const level__btn = document.querySelector('.level__btn')
const level__options = document.querySelector('.level__options')
const level__options_list = document.querySelectorAll('.level__options > li')
const level__btn_arrow = document.querySelector('.level__btn> i')


level__btn.addEventListener('click', ()=>{
    level__options.classList.toggle('checked')
    level__btn_arrow.classList.remove('.bxs-down-arrow');
    level__btn_arrow.classList.toggle('bxs-up-arrow');
})


/* Select and di-select filter options */ 
function active_level_item(){
    level__options_list.forEach(l => l.classList.remove('selected'))
  this.classList.add('selected')
}

level__options_list.forEach(l => l.addEventListener('click', active_level_item))




// =========== TYPE ===============
const type__btn = document.querySelector('.type__btn')
const type__options = document.querySelector('.type__options')
const type__options_list = document.querySelectorAll('.type__options > li')
const type__btn_arrow = document.querySelector('.type__btn> i')



type__btn.addEventListener('click', ()=>{
    type__options.classList.toggle('checked') 
    type__btn_arrow.classList.remove('.bxs-down-arrow');
    type__btn_arrow.classList.toggle('bxs-up-arrow');
})


/* Select and di-select filter options */ 
function active_type_item(){
    type__options_list.forEach(l => l.classList.remove('selected'))
  this.classList.add('selected')
}

type__options_list.forEach(l => l.addEventListener('click', active_type_item))




// ========== LANGAUGE ============
const language__btn = document.querySelector('.language__btn')
const language__options = document.querySelector('.language__options')
const language__options_list = document.querySelectorAll('.language__options > li')
const language__btn_arrow = document.querySelector('.language__btn> i')


language__btn.addEventListener('click', ()=>{
    language__options.classList.toggle('checked')
    language__btn_arrow.classList.remove('.bxs-down-arrow');
    language__btn_arrow.classList.toggle('bxs-up-arrow');
})


/* Select and di-select filter options */ 
function active_language_item(){
    language__options_list.forEach(l => l.classList.remove('selected'))
  this.classList.add('selected')
}

language__options_list.forEach(l => l.addEventListener('click', active_language_item))


// Opening closing the filter navigation on small screens
const filter__icon_container = document.querySelector('.filter__icon-sm')
const filter__icon = document.querySelector('.filter__icon-sm > i')
const filter__container = document.querySelector('.filter__container')

// filter__icon.addEventListener('click', () =>{
//     filter__icon.classList.remove('bxs-plus-circle');
//     filter__icon.classList.toggle('bxs-minus-circle');
// })

function active__item(){
    if(filter__icon.className === 'bx bxs-plus-circle'){
        filter__icon.classList.remove('bxs-plus-circle');
        filter__icon.classList.toggle('bxs-minus-circle');
        filter__container.classList.toggle('active');

    }
    else if (filter__icon.className === 'bx bxs-minus-circle'){
        filter__icon.classList.remove('bxs-minus-circle');
        filter__icon.classList.toggle('bxs-plus-circle');
        filter__container.classList.remove('active');
    }


}

filter__icon_container.addEventListener('click', active__item)











