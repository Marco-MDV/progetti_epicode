const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 5,
  /* on: {
    slideChange : function (){
      hoverSwiperLeft('swipe')
    }
  }, */

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


function hoverColorIcon(){
  const buttons = document.querySelectorAll('.buttonMoreOption')

    buttons.forEach(button =>{
      button.addEventListener('mouseenter',()=>{
        button.classList.add('colorButtonMoreOption')
        const icon = button.querySelector('ion-icon')
        icon.classList.add('colorIconMoreOption')
      })
    })

    buttons.forEach(button=>{
      button.addEventListener('mouseleave',()=>{
        button.classList.remove('colorButtonMoreOption')
        const icon = button.querySelector('ion-icon')
        icon.classList.remove('colorIconMoreOption')
      })
    })
}hoverColorIcon()




function hoverSwiperRight() {
  const swiperWrappers = document.querySelectorAll('.swiper');

  swiperWrappers.forEach(element => {
    element.addEventListener('mouseenter', () => {
      const nextButton = element.querySelector('.swiper-button-next');
      nextButton.classList.add('colorArrow');
    });

    element.addEventListener('mouseleave', () => {
      const nextButton = element.querySelector('.swiper-button-next');
      nextButton.classList.remove('colorArrow');
    });
  });
} hoverSwiperRight();



function hoverSwiperLeft(element){
  if (element == 'swipe') {
    console.log('si');
  }else{
    console.log('no');
  }
}





function removePadding() {
  const swipers = document.querySelectorAll('.swiper'); 

  swipers.forEach(swiper => {
    const swiperRightButton = swiper.querySelector('.swiper-button-next'); 
    const swiperLeftButton =swiper.querySelector('.swiper-button-prev')

    swiperRightButton.addEventListener('click', () => {
      swiper.classList.remove('ps-5'); 
      const x = swiper.querySelector('.swiper-button-prev')
      x.classList.add('colorArrow')
    });
  });
} removePadding();