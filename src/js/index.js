// -------------------- бургер меню -----------------------

function addActiveClass(element) {
    if (element.classList.contains("active")) {
        // Якщо є, видаляємо його
        element.classList.remove("active");
    } else {
        // Якщо немає, додаємо його
        element.classList.add("active");
    }
}

// ------------------ scroll animation ----------------------

const animatedElements = document.querySelectorAll('.animate');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageYOffset;
  const windowHeight = window.innerHeight;

  animatedElements.forEach(element => {
    const sectionTop = element.offsetTop;
    const sectionBottom = sectionTop + element.offsetHeight;

    if (scrollTop + windowHeight > sectionTop && scrollTop < sectionBottom) {
      element.classList.add('visible');
    }
  });
});




