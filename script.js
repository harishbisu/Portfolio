document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "%c Crafted by Harish Kumar ",
    "background: #222; color: #bada55; font-size: 20px; border-radius: 5px; padding: 10px;",
  );

  const typedTextSpan = document.getElementById("typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Problem Solver",
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1,
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (textArray.length) setTimeout(type, newTextDelay + 250);

  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    hamburger.classList.toggle("active");
  }

  function closeSidebar() {
    sidebar.classList.remove("active");
    hamburger.classList.remove("active");
  }

  hamburger.addEventListener("click", toggleSidebar);

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        closeSidebar();
      }
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeSidebar();
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const sections = document.querySelectorAll("section");
  const observerOptions = {
    threshold: 0.3,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const subText = document.getElementById("sub-text");
  if (subText) {
    setTimeout(() => {
      subText.style.opacity = "1";
      subText.style.transform = "translateY(0)";
    }, 1000);
  }
});
