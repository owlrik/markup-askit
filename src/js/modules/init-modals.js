import {setupModal} from "../utils/modal";

// const modals = document.querySelectorAll('.modal');
const modalLogin = document.querySelector('.modal-login');
const modalLoginBtns = document.querySelectorAll('[data-modal="login"]');
const modalRegister = document.querySelector('.modal-register');
const modalRegisterBtns = document.querySelectorAll('[data-modal="register"]');

const initModals = () => {
  if (modalLogin && modalLoginBtns.length) {
    setupModal(modalLogin, modalLoginBtns, false);
  }

  if (modalRegister && modalRegisterBtns.length) {
    setupModal(modalRegister, modalRegisterBtns, false);
  }
};

export {initModals};
