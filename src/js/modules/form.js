const forms = document.querySelectorAll('.form');

const clearForm = (form) => {
  form.reset();
};

const disableSubmit = (form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    clearForm(form);
  });
};

const initForms = () => {
  if (!forms) {
    return;
  }

  forms.forEach((form) => {
    disableSubmit(form);
  });
};

export {initForms};
