// movile menu toggle active
const mobileMenu = document.querySelector('.mobile-icon');

mobileMenu.addEventListener('click', function () {
  this.classList.toggle('active');

  if (this.classList.contains('active')) {
    this.classList.remove('not-actiove');
  } else {
    this.classList.add('not-active');
  }
});
