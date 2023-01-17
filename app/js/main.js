document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  
  const parentSlider = document.querySelector('.swiper'),
        slide = document.querySelectorAll('.header__slider-link');
  
  const slideActive = (i = 0) => {
    slide[i].classList.add('active');
  };
  
  const slideHiden = () => {
    slide.forEach(i => {
      i.classList.remove('active');
    });
  };
  
  slideHiden();
  slideActive();
  
  parentSlider.addEventListener('click', (e) => {
    const target = e.target;
    e.preventDefault;
  
    if (target && target.classList.contains('header__slider-link')) {
      slide.forEach((item, i) => {
        if (target == item) {
          slideHiden();
          slideActive(i);
        }
      });
    }
  });
  //========================================================================================================================================================
  let copy = document.querySelector('.footer__copy span');
  if (copy) {
    copy.textContent = new Date().getFullYear();
  }
  //========================================================================================================================================================
  const burger = document.querySelector('.burger'),
        menu = document.querySelector('.menu'),
        body = document.querySelector('body'),
        menuParent = document.querySelector('.menu__list'),
        menuClose = document.querySelector('.menu__close');
  
  burger.addEventListener('click', () => {
    menu.classList.add('active');
    body.classList.add('lock');
  });
  
  menuClose.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
  });
  
  menuParent.addEventListener('click', e => {
    const target = e.target;
  
    if (target && target.classList.contains('menu__link')) {
      menu.classList.remove('active');
      body.classList.remove('lock');
    }
  });
  
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && menu.classList.contains('active')) {
      menu.classList.remove('active');
      body.classList.remove('lock');
    }
  });
  //========================================================================================================================================================
  const bottomPanel = document.querySelector('.header__content-list');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      bottomPanel.classList.add('hidden');
    } else {
      bottomPanel.classList.remove('hidden');
    }
  });

});