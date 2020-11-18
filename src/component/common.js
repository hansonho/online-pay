export function checkEmail(e) {
  const emailReg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  return emailReg.test(e);
}

export const selectItem = e => {
  e.preventDefault();
  e.currentTarget.classList.toggle('active');
}