const header = document.querySelector('.page-header');
const menuToggle = header.querySelector('.page-header__toggle');
const headerNavigation = header.querySelector('.main-nav');
const navLinks = headerNavigation.querySelectorAll('.main-nav__list--main .main-nav__link[href^="#"]');
const startSection = document.querySelector('.start-home');

const breakpointMd = window.matchMedia('(max-width: 1023px)');

const highlightActiveMenuLink = () => {
  if ((window.pageYOffset + header.clientHeight) >= startSection.clientHeight) {
    header.classList.add('page-header--fixed');
    let currentLink = null;

    navLinks.forEach((menuLink) => {
      const linkedSection = document.querySelector('section#' + menuLink.href.split('#').slice(-1).pop());

      if (linkedSection) {
        const linkedSectionOffset = linkedSection.offsetTop;
        menuLink.classList.remove('main-nav__link--active');

        if (window.pageYOffset >= linkedSectionOffset) {
          currentLink = menuLink;
        }
      }
    });

    if (currentLink) {
        currentLink.classList.add('main-nav__link--active');
      }
    }
    else {
      if (header.classList.contains('page-header--fixed')) {
        header.classList.remove('page-header--fixed');
      }
    }
};

const toggleMenuHighlighter = () => {
  const checkBreakpoint = () => {
    if (!breakpointMd.matches) {
      window.addEventListener('scroll', highlightActiveMenuLink);
    }
    else {
      window.removeEventListener('scroll', highlightActiveMenuLink);
    }
  };

  checkBreakpoint();

  breakpointMd.addEventListener('change', checkBreakpoint);
};

const openMenu = () => {
  menuToggle.ariaPressed = 'true';
  document.body.classList.add('no-scroll');
  headerNavigation.classList.add('main-nav--opened');
};

const closeMenu = () => {
  menuToggle.ariaPressed = 'false';
  document.body.classList.remove('no-scroll');
  headerNavigation.classList.remove('main-nav--opened');
};

const toggleMenu = () => {
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (menuToggle.ariaPressed === 'true') {
        closeMenu();
      }
      else {
        openMenu();
      }
    });
  }

  breakpointMd.addEventListener('change', closeMenu);
};

export {toggleMenu, toggleMenuHighlighter};