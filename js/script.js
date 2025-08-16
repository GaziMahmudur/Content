const PASSWORD = "HexaForce";

// Login with button or Enter key
function checkPassword(event) {
  event.preventDefault();
  let input = document.getElementById("password")?.value;
  if (input === PASSWORD) {
    window.location.href = "index.html";
  } else {
    document.getElementById("error-msg").textContent = "Wrong password!";
  }
}

// Enter key submits password automatically
document.getElementById("password")?.addEventListener("keyup", function (e) {
  if (e.key === "Enter") checkPassword();
});

// Popup for download
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupYes = document.getElementById("popup-yes");

function confirmDownload(name, link) {
  popupText.textContent = `Do you want to download Bachelor Point season 5, ${name} ?`;
  popupYes.onclick = function () {
    window.location.href = link;
  }
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
}

document.getElementById("popup-yes").addEventListener("click", function () {
  // প্রথমে popup hide
  document.getElementById("popup").style.display = "none";

  // কিছু মিলিসেকেন্ড delay দিয়ে download start
  setTimeout(() => {
    window.location.href = link;
  }, 100); // 0.1 second delay
});

document.getElementById("popup-cancel").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        // retrigger purpose: remove class when not in view
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

