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



// 배경이미지 레이지로딩 : [data-bg] 요소가 화면에 근접할 때만 이미지를 불러온다.
(function () {
  const lazyBgs = document.querySelectorAll("[data-bg]");
  if (!lazyBgs.length) {
    return;
  }

  const loadBg = (el) => {
    const url = el.getAttribute("data-bg");
    if (!url) {
      return;
    }
    el.removeAttribute("data-bg"); // 중복 로딩 방지

    const preload = new Image();
    preload.onload = preload.onerror = () => {
      el.style.backgroundImage = 'url("' + url + '")';
      el.classList.add("bg-loaded");
    };
    preload.src = url;
  };

  if (!("IntersectionObserver" in window)) {
    lazyBgs.forEach(loadBg);
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        loadBg(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { rootMargin: "300px 0px" } // 화면에 들어오기 조금 전에 미리 로딩
  );

  lazyBgs.forEach((el) => observer.observe(el));
})();
