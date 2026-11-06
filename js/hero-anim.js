(function(){var svg=document.getElementById("hl");if(!svg)return;
var hs=[].slice.call(svg.querySelectorAll("polygon")),ring=document.getElementById("hr"),
F=[[50.9,95.6,10],[28.4,73.0,10],[28.4,42.6,10],[48.8,22.1,10],[76.3,22.1,10],[94.6,40.5,10],[94.6,65.0,10]],cx=60,cy=60,RR=44,TP=Math.PI*2,
W=2.6,T1=1800,DUR=1300,ST=100,TOT=T1+(F.length-1)*ST+DUR,raf=0,running=false;
var fa=[],fr=[],prev=0;F.forEach(function(p,i){var dx=p[0]-cx,dy=p[1]-cy,a=Math.atan2(dy,dx);if(a<0)a+=TP;while(i&&a<prev)a+=TP;prev=a;fa.push(a);fr.push(Math.sqrt(dx*dx+dy*dy))});
var a0=[],tg=[];F.forEach(function(p,i){a0.push(i*TP/F.length);var sa=a0[i]+W*((T1+i*ST)/1000),k=Math.ceil((sa+1-fa[i])/TP);tg.push(fa[i]+k*TP)});
function ez(x){x=Math.max(0,Math.min(1,x));return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2}
function fin(){hs.forEach(function(h,i){h.setAttribute("transform","translate("+F[i][0]+" "+F[i][1]+")")});hs[hs.length-1].style.fill="";ring.style.opacity=0;svg.classList.add("done")}
function frame(now){var t=now-t0;
hs.forEach(function(h,i){var ts=T1+i*ST,sc=ez((t-i*140)/450),ang,r,rot,p=(t-ts)/DUR;
if(p<=0){ang=a0[i]+W*t/1000;r=RR;rot=(ang-tg[i])*180/Math.PI}
else{var sa=a0[i]+W*ts/1000,e=ez(p);ang=sa+(tg[i]-sa)*e;r=RR+(fr[i]-RR)*e;rot=(ang-tg[i])*180/Math.PI}
h.setAttribute("transform","translate("+(cx+r*Math.cos(ang)).toFixed(2)+" "+(cy+r*Math.sin(ang)).toFixed(2)+") rotate("+rot.toFixed(1)+") scale("+sc.toFixed(3)+")");
if(i===hs.length-1)h.style.fill=p>.8?"var(--stinger)":"#B6F23A"});
ring.style.opacity=Math.max(0,Math.min(1,t/500))*(1-ez((t-T1)/1300));
if(t<TOT)raf=requestAnimationFrame(frame);else{running=false;fin()}}
var t0=0;function play(){if(running)return;running=true;svg.classList.remove("done");t0=performance.now()+250;
cancelAnimationFrame(raf);hs.forEach(function(h){h.setAttribute("transform","translate("+cx+" "+cy+") scale(0)")});
raf=requestAnimationFrame(function loop(n){if(n<t0){raf=requestAnimationFrame(loop)}else{t0=n;frame(n)}})}
svg.addEventListener("click",play);
if(matchMedia("(prefers-reduced-motion: reduce)").matches)fin();else play();})();
