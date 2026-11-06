(function(){
var b=document.getElementById("cxb"),p=document.getElementById("cxp"),m=document.getElementById("cxm"),q=document.getElementById("cxq"),f=document.getElementById("cxf"),i=document.getElementById("cxi"),started=false;
var API=document.body.dataset.api||"",consent=false,decided=!API,last="";
var sid=(function(){var a=new Uint8Array(16);crypto.getRandomValues(a);return[].map.call(a,function(x){return("0"+x.toString(16)).slice(-2)}).join("")})();
function log(bot){if(!API||!consent||!last)return;var u=last;last="";fetch(API+"/api/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({sid:sid,consent:true,user:u,bot:bot}),keepalive:true}).catch(function(){})}
function consentChips(){q.textContent="";[["I agree",true],["No thanks, continue without saving",false]].forEach(function(o){var x=document.createElement("button");x.type="button";x.textContent=o[0];x.onclick=function(){decided=true;consent=o[1];add(o[0],"me");add(o[1]?"Thank you! How can I help you today?":"No problem, nothing from this chat will be saved. How can I help you today?","bot");chips()};q.appendChild(x)})}
var CH=EU_CHAT.CH,KB=EU_CHAT.KB;
function add(t,c){var d=document.createElement("div");d.className="cxg "+c;d.textContent=t;m.appendChild(d);m.scrollTop=m.scrollHeight;return d}
function chips(){q.textContent="";CH.forEach(function(c){var x=document.createElement("button");x.type="button";x.textContent=c;x.onclick=function(){ask(c)};q.appendChild(x)});m.scrollTop=m.scrollHeight}
function reply(t,h){var ty=document.createElement("div");ty.className="cxt";ty.innerHTML="<i></i><i></i><i></i>";m.appendChild(ty);m.scrollTop=m.scrollHeight;
setTimeout(function(){ty.remove();add(t,"bot");log(t);if(h){var x=document.createElement("button");x.type="button";x.textContent="Go to contact form";x.onclick=function(){p.classList.remove("open");b.setAttribute("aria-expanded","false");var c=document.getElementById("contact");if(c)c.scrollIntoView({behavior:"smooth",block:"start"})};q.textContent="";q.appendChild(x);var y=document.createElement("button");y.type="button";y.textContent="More questions";y.onclick=chips;q.appendChild(y);m.scrollTop=m.scrollHeight}else chips()},650)}
function ask(s){s=(s||"").trim();if(!s)return;if(!decided){decided=true;consent=false}last=s.slice(0,1000);add(s,"me");var l=s.toLowerCase();
for(var k=0;k<KB.length;k++){if(KB[k][0].test(l)){reply(KB[k][1],KB[k][2]);return}}
reply("I am not sure about that one. I can tell you about our services or how we work, or you can reach the team directly through the contact form.",true)}
function open(){p.classList.add("open");b.setAttribute("aria-expanded","true");b.setAttribute("aria-label","Close support chat");if(!started){started=true;add("Hi, I am Aria, Euscorpius's support assistant.","bot");if(API){add("Before we start: with your OK we save this chat so we can follow up and improve our service. Please do not share sensitive data. Chats are deleted automatically after 90 days. See the Privacy Policy in the footer.","bot");consentChips()}else{add("How can I help you today?","bot");chips()}}setTimeout(function(){i.focus()},50)}
function close(){p.classList.remove("open");b.setAttribute("aria-expanded","false");b.setAttribute("aria-label","Open support chat")}
b.onclick=function(){p.classList.contains("open")?close():open()};
f.onsubmit=function(e){e.preventDefault();var v=i.value;i.value="";ask(v)};
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&p.classList.contains("open")){close();b.focus()}});
})()
