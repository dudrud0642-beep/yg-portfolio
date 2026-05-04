const navLinks = document.querySelectorAll(".gnb a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.startsWith("#")) {
      return;
    }

    const target = document.querySelector(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
});

window.addEventListener("load", function() {
  setTimeout(() => {
    const bars = document.querySelectorAll('.bar_in');
    bars.forEach(bar => {
      bar.classList.add('active');
    });
  }, 600);
});


