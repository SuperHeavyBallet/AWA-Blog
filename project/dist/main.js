(()=>{"use strict";!function(){const s=document.querySelector("#mobile-menu-button"),e=document.querySelector("#dropdown-menu");window.addEventListener("resize",(()=>{window.innerWidth>900&&!e.classList.contains("hidden")&&(console.log("Should Hide"),e.classList.remove("shown"),e.classList.add("hidden"))})),s.addEventListener("click",(()=>{e.classList.contains("hidden")?(e.classList.remove("hidden"),e.classList.add("shown")):e.classList.contains("shown")&&(e.classList.remove("shown"),e.classList.add("hidden"))}))}()})();