function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  const socialList = document.querySelector('.socials');
  const heroSection = document.querySelector('.hero');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
      setTimeout(() => {
        socialList.classList.add('active');
      }, 300);
      heroSection.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
      socialList.classList.remove('active');
      heroSection.classList.remove('locked');
    }
  });
}
burgerMenu();

function toggleBtnClass() {
  const languageBtn = document.querySelector('.language-btn');

  languageBtn.addEventListener('click', () => {
    languageBtn.parentElement.classList.toggle('open');
  });
}

toggleBtnClass();
