/* Contact form. With an API configured (site.json "api") the enquiry is stored and emailed by the backend;
   without one it falls back to opening the visitor's email app. */
document.getElementById("f").addEventListener("submit", function (e) {
  e.preventDefault();
  var f = e.target, ok = true, st = document.getElementById("st"), API = document.body.dataset.api || "";
  ["name", "email", "message"].forEach(function (k) {
    var el = f.elements[k], v = el.value.trim(), bad = !v || (k === "email" && !/^\S+@\S+\.\S+$/.test(v));
    el.classList.toggle("bad", bad); if (bad) ok = false;
  });
  function say(t, err) { st.style.color = err ? "#ff6b6b" : ""; st.textContent = t; }
  if (!ok) { say("Please fill in all fields with a valid email.", true); return; }
  var TO = f.dataset.to;
  function viaMail() {
    var b = "Name: " + f.name.value + "\nEmail: " + f.email.value + "\nService: " + f.service.value + "\n\n" + f.message.value;
    say("Opening your email app to send your message...");
    location.href = "mailto:" + TO + "?subject=" + encodeURIComponent("Enquiry: " + f.service.value) + "&body=" + encodeURIComponent(b);
  }
  if (!API) { viaMail(); return; }
  var btn = f.querySelector("button[type=submit]"); btn.disabled = true; say("Sending...");
  fetch(API + "/api/contact", {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ name: f.name.value, email: f.email.value, service: f.service.value, message: f.message.value, website: f.website ? f.website.value : "" })
  }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
    .then(function (x) {
      if (x.ok) { say("Thank you! We have received your message and will reply soon."); f.reset(); }
      else say((x.d && x.d.error) || "Something went wrong.", true);
    })
    .catch(function () { say("Could not send right now. Please email us at " + TO + ".", true); })
    .then(function () { btn.disabled = false; });
});
