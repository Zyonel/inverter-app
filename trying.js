// Make header change on scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
/*document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,  // fire when 20% of element is visible
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});*/

/*document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // if element has passed out of view upwards, hide it again
        if (entry.boundingClientRect.top < 0) {
          entry.target.classList.remove("visible");
        }
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});*/
/*document.addEventListener("DOMContentLoaded", () => {
  const readMoreLinks = document.querySelectorAll(".service-box .read-more");

  readMoreLinks.forEach(link => {
    link.addEventListener("click", () => {
      const box = link.closest(".service-box");
      box.classList.toggle("expanded");*/

      // Toggle text
      /*if (box.classList.contains("expanded")) {
        link.textContent = "Read less";
      } else {
        link.textContent = "Read more";
      }
    });
  });
});*/

//Get all toogle buttons 
    /*document.querySelectorAll('.read-more').forEach(button => {
      button.addEventListener('click', function() {
        const box = this.parentElement;
        const paragraph = box.querySelector('p');

        if (paragraph.style.display === "none" || paragraph.style.display === "") {
          paragraph.style.display = "block";
          this.textContent = "Read less";
        } else {
          paragraph.style.display = "none";
          this.textContent = "Read more";
        }
      });
    });*/

    /*document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', function() {
    const box = this.parentElement;
    const content = box.querySelector('.service-content'); // select container

    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
      this.textContent = "Read less";
    } else {
      content.style.display = "none";
      this.textContent = "Read more";
    }
  });
});*/

/*document.querySelectorAll('.service-box .read-more').forEach(button => {
  button.addEventListener('click', function() {
    const box = this.closest('.service-box'); // parent .service-box
    box.classList.toggle('expanded');         // toggle expanded class

    // Change button text
    this.textContent = box.classList.contains('expanded') ? 'Read Less' : 'Read More';
  });
});
*/

    // Get all toggle buttons
    /*const toggles = document.querySelectorAll('.toggle-btn');

    toggles.forEach(btn => {
      btn.addEventListener('click', () => {
        const paragraph = btn.previousElementSibling; // the <p> before the button
        if (paragraph.style.display === "none" || paragraph.style.display === "") {
          paragraph.style.display = "block";
          btn.textContent = "Read less";
        } else {
          paragraph.style.display = "none";
          btn.textContent = "Read more";
        }
      });
    });*/

    // Toggle only the clicked box
/*const toggles = document.querySelectorAll('.toggle-btn');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const box = btn.closest('.box'); // target only this box
    const paragraph = box.querySelector('p');

    // Toggle paragraph in this box
    if (paragraph.style.display === "none" || paragraph.style.display === "") {
      paragraph.style.display = "block";
      btn.textContent = "Read less";
    } else {
      paragraph.style.display = "none";
      btn.textContent = "Read more";
    }
  });
});*/


const toggles = document.querySelectorAll('.toggle-btn');

toggles.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentBox = btn.closest('.box');
    const currentParagraph = currentBox.querySelector('p');

    // Hide all other paragraphs
    document.querySelectorAll('.box').forEach(box => {
      const p = box.querySelector('p');
      const toggle = box.querySelector('.toggle-btn');
      if (box !== currentBox) {
        p.style.display = "none";
        toggle.textContent = "Read more";
      }
    });

    // Toggle the current one
    if (currentParagraph.style.display === "none" || currentParagraph.style.display === "") {
      currentParagraph.style.display = "block";
      btn.textContent = "Read less";
    } else {
      currentParagraph.style.display = "none";
      btn.textContent = "Read more";
    }
  });
});

// Count-up animation
document.querySelectorAll(".stat-box h2").forEach(el => {
  let target = +el.textContent.replace(/\D/g, "");
  let count = 0;
  let speed = target / 100; // adjust speed
  let update = setInterval(() => {
    count += speed;
    if (count >= target) {
      el.textContent = target + "+";
      clearInterval(update);
    } else {
      el.textContent = Math.floor(count) + "+";
    }
  }, 30);
});

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements you want animated
  const selector = ".fade-in, .slide-in-left, .slide-in-right, .zoom-in";
  const animEls = document.querySelectorAll(selector);

  const appearOptions = {
    threshold: 0.2 // Trigger when 20% is visible
  };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        // Hide again when it's out of view so it can animate again later
        entry.target.classList.remove("visible");
      }
    });
  }, appearOptions);

  animEls.forEach(el => appearOnScroll.observe(el));
});


