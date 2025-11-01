// Header change on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Toggle content visibility
const toggles = document.querySelectorAll(".toggle-btn");

toggles.forEach(btn => {
  btn.addEventListener("click", () => {
    const currentBox = btn.closest(".box");
    const currentParagraph = currentBox.querySelector("p");

    // Hide other boxes
    document.querySelectorAll(".box").forEach(box => {
      const p = box.querySelector("p");
      const toggle = box.querySelector(".toggle-btn");
      if (box !== currentBox) {
        p.style.display = "none";
        toggle.textContent = "Read more";
      }
    });

    // Toggle current one
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
  let speed = target / 100;
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

// Scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const selector = ".fade-in, .slide-in-left, .slide-in-right, .zoom-in";
  const animEls = document.querySelectorAll(selector);

  const appearOptions = { threshold: 0.2 };

  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, appearOptions);

  animEls.forEach(el => appearOnScroll.observe(el));
});

// --- FORM SUBMISSION LOGIC ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = {};
      new FormData(form).forEach((value, key) => {
        formData[key] = value;
      });

      try {
        const response = await fetch("/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        alert(result.message || "Order submitted successfully");
        form.reset();
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit order. Try again.");
      }
    });
  }
});
