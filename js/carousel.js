(function(){var d=document,$=function(i){return d.getElementById(i)},tr=$("tr"),cs=tr.children,dots=$("dots"),paused=false;
var rm=matchMedia("(prefers-reduced-motion: reduce)").matches;
function pv(){return innerWidth>900?3:innerWidth>600?2:1}
function stp(){return cs[0].getBoundingClientRect().width+16}
function cnt(){return cs.length-pv()+1}
function cur(){return Math.min(Math.round(tr.scrollLeft/stp()),cnt()-1)}
function go(i){var n=cnt();i=(i%n+n)%n;tr.scrollTo({left:i*stp(),behavior:rm?"auto":"smooth"})}
function mark(){var c=cur();for(var i=0;i<dots.children.length;i++)dots.children[i].classList.toggle("on",i===c)}
function build(){dots.innerHTML="";for(var i=0;i<cnt();i++){(function(i){var b=d.createElement("button");b.type="button";b.setAttribute("aria-label","Go to slide "+(i+1));b.onclick=function(){go(i)};dots.appendChild(b)})(i)}mark()}
$("pv").onclick=function(){go(cur()-1)};$("nx").onclick=function(){go(cur()+1)};
tr.addEventListener("scroll",mark,{passive:true});addEventListener("resize",build);build();
var car=tr.parentNode.parentNode;["pointerenter","focusin","touchstart"].forEach(function(e){car.addEventListener(e,function(){paused=true})});
["pointerleave","focusout","touchend"].forEach(function(e){car.addEventListener(e,function(){paused=false})});
if(!rm)setInterval(function(){if(!paused)go(cur()+1)},3800);
d.documentElement.classList.add("js");var els=d.querySelectorAll("section .wrap,.hero>div");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){e.classList.add("rv");io.observe(e)})}
else{els.forEach(function(e){e.classList.add("rv","in")})}})();
