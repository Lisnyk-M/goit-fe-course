"use strict";window.onload=function(){var N=!1;function p(){N=!1;var e=document.getElementsByClassName("navigation-href"),t=!0,a=!1,s=void 0;try{for(var n,o=e[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){n.value.classList.remove("navigation-href-show")}}catch(e){a=!0,s=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw s}}document.getElementsByClassName("navigation")[0].classList.remove("navigation-show"),document.getElementsByClassName("burger-close")[0].classList.remove("burger-close-show"),document.getElementsByClassName("block-navigation")[0].classList.remove("block-navigation-show"),document.getElementsByClassName("navigation-menu")[0].classList.remove("navigation-menu-show"),document.getElementsByClassName("navigation-text")[0].classList.remove("color-menu"),document.getElementsByClassName("navigation-text-second")[0].classList.remove("color-orange"),document.getElementsByClassName("navigation-button-wrap")[0].classList.remove("display-block"),document.getElementsByClassName("navigation-burger")[0].classList.remove("display-none"),document.getElementsByClassName("navigation-link-wrap")[0].classList.remove("navigation-link-wrap-show"),document.getElementsByClassName("first-section__wrap-0")[0].classList.remove("first-section__wrap-0-show"),document.getElementsByClassName("navigation-menu-wrap")[0].classList.remove("navigation-menu-wrap-show"),document.body.style.overflow="visible",document.getElementsByClassName("color-for-menu")[0].classList.remove("color-menu"),document.getElementsByClassName("navigation-button-wrap")[0].classList.remove("navigation-button-wrap-show");var l=document.getElementsByClassName("wrap"),i=!0,r=!1,m=void 0;try{for(var c,d=l[Symbol.iterator]();!(i=(c=d.next()).done);i=!0){c.value.classList.remove("wrap-show")}}catch(e){r=!0,m=e}finally{try{i||null==d.return||d.return()}finally{if(r)throw m}}var u=document.getElementsByClassName("position-relative"),v=!0,g=!1,y=void 0;try{for(var w,f=u[Symbol.iterator]();!(v=(w=f.next()).done);v=!0){w.value.style.left="0px"}}catch(e){g=!0,y=e}finally{try{v||null==f.return||f.return()}finally{if(g)throw y}}document.getElementsByClassName("first-section__wrap-0")[0].classList.remove("first-show")}window.addEventListener("resize",function(){N&&1280<=document.documentElement.clientWidth&&p()}),document.getElementsByClassName("navigation-burger")[0].addEventListener("click",function(){N=!0;var e=document.documentElement.offsetWidth,t=document.getElementsByClassName("navigation-href"),a=!0,s=!1,n=void 0;try{for(var o,l=t[Symbol.iterator]();!(a=(o=l.next()).done);a=!0){var i=o.value;i.classList.add("navigation-href-show"),i.addEventListener("click",p)}}catch(e){s=!0,n=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw n}}document.getElementsByClassName("navigation")[0].classList.add("navigation-show"),document.getElementsByClassName("burger-close")[0].classList.add("burger-close-show"),document.getElementsByClassName("block-navigation")[0].classList.add("block-navigation-show"),document.getElementsByClassName("navigation-menu")[0].classList.add("navigation-menu-show"),document.getElementsByClassName("navigation-text")[0].classList.add("color-menu"),document.getElementsByClassName("navigation-text-second")[0].classList.add("color-orange"),document.getElementsByClassName("navigation-button-wrap")[0].classList.add("display-block"),document.getElementsByClassName("navigation-burger")[0].classList.add("display-none"),document.getElementsByClassName("navigation-link-wrap")[0].classList.add("navigation-link-wrap-show"),document.getElementsByClassName("first-section__wrap-0")[0].classList.add("first-section__wrap-0-show"),document.getElementsByClassName("navigation-menu-wrap")[0].classList.add("navigation-menu-wrap-show"),document.body.style.overflow="hidden",document.getElementsByClassName("color-for-menu")[0].classList.add("color-menu"),document.getElementsByClassName("navigation-button-wrap")[0].classList.add("navigation-button-wrap-show");var r=document.getElementsByClassName("wrap"),m=!0,c=!1,d=void 0;try{for(var u,v=r[Symbol.iterator]();!(m=(u=v.next()).done);m=!0){var g=u.value;g.classList.add("wrap-show")}}catch(e){c=!0,d=e}finally{try{m||null==v.return||v.return()}finally{if(c)throw d}}var y=document.documentElement.offsetWidth,w=document.getElementsByClassName("position-relative"),f=!0,E=!1,h=void 0;try{for(var B,C=w[Symbol.iterator]();!(f=(B=C.next()).done);f=!0){var L=B.value;L.style.left="".concat((e-y)/2,"px")}}catch(e){E=!0,h=e}finally{try{f||null==C.return||C.return()}finally{if(E)throw h}}document.getElementsByClassName("first-section__wrap-0")[0].classList.add("first-show")}),document.getElementsByClassName("burger-close")[0].addEventListener("click",p),document.getElementsByClassName("navigation-link")[0].addEventListener("click",p)};