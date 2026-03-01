const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

let activeLink = 0;

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    sections.forEach(sec => sec.classList.remove("active"));

    setTimeout(() => {
      sections[i].classList.add("active");
    }, 200);
  });
});

const sectionHeroEl = document.querySelector(".home-section");

if(sectionHeroEl){
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  { root:null, threshold:0, rootMargin:"-80px" }
);
obs.observe(sectionHeroEl);
}

// Initialize EmailJS
(function () {
  emailjs.init("l8fTWhTN_r2PoH9K3");
})();

// Form Submit
document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form");

  if(form){
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_3wxjcrr",
        "template_h0tel2t",
        this
      )
      .then(function () {
        alert("Message Sent Successfully!");
        form.reset();
      }, function (error) {
        alert("Failed to send message.");
        console.log(error);
      });

    });
  }

});