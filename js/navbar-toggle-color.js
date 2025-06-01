window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navigation');
    const togglerIcon = document.querySelector('.navbar-toggler i');
  
    if (window.scrollY > 50) {
      navbar.classList.add('animated');
      if (togglerIcon) {
        togglerIcon.classList.remove('toggler-white');
        togglerIcon.classList.add('toggler-black');
      }
    } else {
      navbar.classList.remove('animated');
      if (togglerIcon) {
        togglerIcon.classList.remove('toggler-black');
        togglerIcon.classList.add('toggler-white');
      }
    }
  });
  