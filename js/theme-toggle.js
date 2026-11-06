(function(){var r=document.documentElement,b=document.getElementById("tg");if(!b)return;
function lab(){var l=r.getAttribute("data-theme")==="light";b.setAttribute("aria-label",l?"Switch to dark mode":"Switch to light mode")}
function set(t,save){r.setAttribute("data-theme",t);if(save){try{localStorage.setItem("eu-theme",t)}catch(e){}}lab()}
b.addEventListener("click",function(){set(r.getAttribute("data-theme")==="light"?"dark":"light",true)});
try{matchMedia("(prefers-color-scheme: light)").addEventListener("change",function(m){var st;try{st=localStorage.getItem("eu-theme")}catch(e){}if(!st)set(m.matches?"light":"dark",false)})}catch(e){}
lab()})();
