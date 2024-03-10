const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 8,
  spaceBetween: 10,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function allFunction(){
  scroll();
  hoverColorIcon();
  hoverCard();
  hoverSwiperRight();
  removePadding();
  swiperMouseLeft();
}allFunction()


function hoverCard(){
  const cardNetflix = document.querySelectorAll('.cardNetflix')
  cardNetflix.forEach(element=>{
    const figureNetflix = element.querySelector('.containerCardFilm')
    const imgFigureNetflix = figureNetflix.querySelector('.containerCardFilm img')
    const InfoCardNetflix = element.querySelector('.InfoCardNetflix')
    figureNetflix.addEventListener('mouseover', ()=>{
      element.classList.add('hoverCard')
      imgFigureNetflix.classList.add('hoverContainerCardFilm')
      InfoCardNetflix.classList.add('hoverInfoCardNetflix')
    })
    figureNetflix.addEventListener('mouseleave', ()=>{
      element.classList.remove('hoverCard')
      imgFigureNetflix.classList.remove('hoverContainerCardFilm')
      InfoCardNetflix.classList.remove('hoverInfoCardNetflix')
    })
  })
}

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
}


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
} 

function swiperMouseLeft(){
  const swiperWrappers = document.querySelectorAll('.swiper');

  swiperWrappers.forEach(element => {
    const buttonSwipeRight = element.querySelector('.swiper-button-next');
    const buttonSwipeLeft = element.querySelector('.swiper-button-prev');
    buttonSwipeRight.addEventListener('click',()=>{
      buttonSwipeLeft.classList.add('colorArrow')
      element.addEventListener('mouseenter', () => {
        buttonSwipeLeft.classList.add('colorArrow');
      });
  
      element.addEventListener('mouseleave', () => {
        buttonSwipeLeft.classList.remove('colorArrow');
      });
    })
  });
}

function removePadding() {
  const swipers = document.querySelectorAll('.swiper'); 

  swipers.forEach(swiper => {
    const swiperRightButton = swiper.querySelector('.swiper-button-next'); 

    swiperRightButton.addEventListener('click', () => {
      swiper.classList.remove('ps-5'); 
    });
  });
} 


/* scrolling */

function scroll(){
  const elements = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('hidden');
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  
  elements.forEach(element => {
    observer.observe(element);
  });  
}


