(()=>{"use strict";const e=new class{open(){let e=document.querySelector(".text_container");e.classList.contains("text_container_animated")?(e.classList.remove("text_container_animated"),e.classList.add("shown"),window.setTimeout((()=>{e.classList.remove("shown")}),2e3)):e.classList.add("text_container_animated")}};document.querySelector(".collapseBtn").addEventListener("click",e.open)})();