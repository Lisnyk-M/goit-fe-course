window.onload = function () {
    let is_menu_runned = false;
    window.addEventListener('resize', resize);
    document.getElementsByClassName("navigation-burger")[0].addEventListener('click', burger_click);
    document.getElementsByClassName("burger-close")[0].addEventListener('click', menu_hide);
    document.getElementsByClassName("navigation-link")[0].addEventListener('click', menu_hide);

    function burger_click() {
        is_menu_runned = true;

        let width_before_hide_scrollbar = document.documentElement.offsetWidth;

        let navigation_href = document.getElementsByClassName('navigation-href');
        for (var elem of navigation_href) {
            elem.classList.add('navigation-href-show');
            elem.addEventListener('click', menu_hide);
        }

        document.getElementsByClassName('navigation')[0].classList.add('navigation-show');
        document.getElementsByClassName('burger-close')[0].classList.add('burger-close-show');

        document.getElementsByClassName('block-navigation')[0].classList.add('block-navigation-show');
        document.getElementsByClassName('navigation-menu')[0].classList.add('navigation-menu-show');
        document.getElementsByClassName('navigation-text')[0].classList.add('color-menu');
        document.getElementsByClassName('navigation-text-second')[0].classList.add('color-orange');
        document.getElementsByClassName('navigation-button-wrap')[0].classList.add('display-block');
        document.getElementsByClassName('navigation-burger')[0].classList.add('display-none');
        document.getElementsByClassName('navigation-link-wrap')[0].classList.add('navigation-link-wrap-show');
        document.getElementsByClassName('first-section__wrap-0')[0].classList.add('first-section__wrap-0-show');
        document.getElementsByClassName('navigation-menu-wrap')[0].classList.add('navigation-menu-wrap-show');
        document.body.style.overflow = 'hidden';
        document.getElementsByClassName('color-for-menu')[0].classList.add('color-menu');
        document.getElementsByClassName('navigation-button-wrap')[0].classList.add('navigation-button-wrap-show');
        
        let wrap = document.getElementsByClassName('wrap');
        for (let elem of wrap) {
            elem.classList.add('wrap-show');
        }

        let width_after_hide_scrollbar = document.documentElement.offsetWidth;
        let position_relative = document.getElementsByClassName('position-relative');
        for (let elem of position_relative) {            
            elem.style.left = `${(width_before_hide_scrollbar - width_after_hide_scrollbar) / 2}px`;
        }
        document.getElementsByClassName('first-section__wrap-0')[0].classList.add('first-show');
    }

    function menu_hide() {
        is_menu_runned = false;
        let navigation_href = document.getElementsByClassName('navigation-href');
        for (let elem of navigation_href) {
            elem.classList.remove('navigation-href-show');
        }

        document.getElementsByClassName('navigation')[0].classList.remove('navigation-show');
        document.getElementsByClassName('burger-close')[0].classList.remove('burger-close-show');
        document.getElementsByClassName('block-navigation')[0].classList.remove('block-navigation-show');
        document.getElementsByClassName('navigation-menu')[0].classList.remove('navigation-menu-show');
        document.getElementsByClassName('navigation-text')[0].classList.remove('color-menu');
        document.getElementsByClassName('navigation-text-second')[0].classList.remove('color-orange');
        document.getElementsByClassName('navigation-button-wrap')[0].classList.remove('display-block');
        document.getElementsByClassName('navigation-burger')[0].classList.remove('display-none');
        document.getElementsByClassName('navigation-link-wrap')[0].classList.remove('navigation-link-wrap-show');
        document.getElementsByClassName('first-section__wrap-0')[0].classList.remove('first-section__wrap-0-show');
        document.getElementsByClassName('navigation-menu-wrap')[0].classList.remove('navigation-menu-wrap-show');
        document.body.style.overflow = 'visible';
        document.getElementsByClassName('color-for-menu')[0].classList.remove('color-menu');
        document.getElementsByClassName('navigation-button-wrap')[0].classList.remove('navigation-button-wrap-show');
        let wrap = document.getElementsByClassName('wrap');
        for (let elem of wrap) {
            elem.classList.remove('wrap-show');
        }
     
        let position_relative = document.getElementsByClassName('position-relative');
        for (let elem of position_relative) {            
            elem.style.left = `0px`;
        }
        document.getElementsByClassName('first-section__wrap-0')[0].classList.remove('first-show');
    }

    function resize() {
        if (is_menu_runned)
            if (document.documentElement.clientWidth >= 1280)
                menu_hide();
    }
}