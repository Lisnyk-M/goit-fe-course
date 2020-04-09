"use strict";

window.onload = function () {
  var is_menu_runned = false;
  window.addEventListener('resize', resize);
  document.getElementsByClassName("navigation-burger")[0].addEventListener('click', burger_click);
  document.getElementsByClassName("burger-close")[0].addEventListener('click', menu_hide);
  document.getElementsByClassName("navigation-link")[0].addEventListener('click', menu_hide);

  function burger_click() {
    is_menu_runned = true;
    var width_before_hide_scrollbar = document.documentElement.offsetWidth;
    var navigation_href = document.getElementsByClassName('navigation-href');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = navigation_href[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var elem = _step.value;
        elem.classList.add('navigation-href-show');
        elem.addEventListener('click', menu_hide);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
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
    var wrap = document.getElementsByClassName('wrap');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = wrap[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _elem = _step2.value;

        _elem.classList.add('wrap-show');
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var width_after_hide_scrollbar = document.documentElement.offsetWidth;
    var position_relative = document.getElementsByClassName('position-relative');
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = position_relative[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _elem2 = _step3.value;
        _elem2.style.left = "".concat((width_before_hide_scrollbar - width_after_hide_scrollbar) / 2, "px");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    document.getElementsByClassName('first-section__wrap-0')[0].classList.add('first-show');
  }

  function menu_hide() {
    is_menu_runned = false;
    var navigation_href = document.getElementsByClassName('navigation-href');
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = navigation_href[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var elem = _step4.value;
        elem.classList.remove('navigation-href-show');
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
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
    var wrap = document.getElementsByClassName('wrap');
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = wrap[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _elem3 = _step5.value;

        _elem3.classList.remove('wrap-show');
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    var position_relative = document.getElementsByClassName('position-relative');
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = position_relative[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var _elem4 = _step6.value;
        _elem4.style.left = "0px";
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
          _iterator6.return();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    document.getElementsByClassName('first-section__wrap-0')[0].classList.remove('first-show');
  }

  function resize() {
    if (is_menu_runned) if (document.documentElement.clientWidth >= 1280) menu_hide();
  }
};