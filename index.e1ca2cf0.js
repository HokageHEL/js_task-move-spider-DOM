var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(i){var c=parseInt(getComputedStyle(e).borderWidth,10);if("wall"===i.target.className){var l=i.clientY-e.offsetTop-c-t.clientHeight/2,n=i.clientX-e.offsetLeft-c-t.clientWidth/2;l=Math.max(0,Math.min(l,e.clientHeight-t.clientHeight)),n=Math.max(0,Math.min(n,e.clientWidth-t.clientWidth)),t.style.top="".concat(l,"px"),t.style.left="".concat(n,"px")}});
//# sourceMappingURL=index.e1ca2cf0.js.map