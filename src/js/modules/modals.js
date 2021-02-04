const modals = () => {
 function bindModal(triggerSelector, modalSelector, closeSelector) {
const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector);

  trigger.forEach(item => {
    item.addEventListener('click', (e) => {
    if(e.target) {
       e.preventDefault();
    }
    modal.classList.toggle('active');
    modal.classList.toggle('hide');
    close.classList.toggle('active');
    close.classList.toggle('hide');
    /*document.body.style.overflow = 'hidden';*/
  });
  });
  close.addEventListener('click', () => {
    modal.classList.toggle('hide');
    close.classList.toggle('hide');
    /*document.body.style.overflow = '';*/
  });

  modal.addEventListener('click', (e) => {
      if(e.target === modal) {
      modal.classList.toggle('hide');
      close.classList.toggle('hide');
      /*document.body.style.overflow = '';*/
    }
  });
 }
bindModal('.header__call','.popup__mainForm','.popup__close');
};
export default modals;
