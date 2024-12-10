document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbarMbDeploy");
  const navbarFixed = document.getElementById("navbarMbDeployFixed");
  const hambLink = document.getElementById('hambLink');
  const hambLinkFixed = document.getElementById('hambLinkFixed');
  const navWrapper = navbar.querySelector('ul');
  const navWrapperFixed = navbarFixed.querySelector('ul');

  const inicio = document.getElementById('inicio');
  const navbarShow = document.querySelector('.navbar-fixed');


  const toggleNavBar = (navbarElement, hambLink) => {
    hambLink.classList.toggle("active");
    navbarElement.classList.toggle("open");
  };

  hambLink.addEventListener('click', () => toggleNavBar(navbar, hambLink));
  hambLinkFixed.addEventListener('click', () => toggleNavBar(navbarFixed, hambLinkFixed));

  navWrapper.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      toggleNavBar(navbar, hambLink);
    }
  });

  navWrapperFixed.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      toggleNavBar(navbarFixed, hambLinkFixed);
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navbarShow.classList.add('show');
      } else {
        navbarShow.classList.remove('show');
        hambLinkFixed.classList.remove("active");
        navbarFixed.classList.remove("open");
      }
    });
  });

  observer.observe(inicio);
});