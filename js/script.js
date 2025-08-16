const PASSWORD = "HexaForce"; // Login with button or Enter key
function checkPassword(event) {
  if (event) event.preventDefault();
  let input = document.getElementById("password")?.value;
  if (input === PASSWORD) {
    window.location.href = "index.html";
  } else {
    document.getElementById("error-msg").textContent = "Wrong password!";
  }
}

// Enter key submits password automatically
document.getElementById("password")?.addEventListener("keyup", function (e) {
  if (e.key === "Enter") checkPassword(e);
});

// ── Popup for download (Google Drive) ────────────────────────────────
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupYes = document.getElementById("popup-yes");
const popupCancel = document.getElementById("popup-cancel");

// কার্ডে ক্লিক করলে টেম্পোরারি লিঙ্ক রাখব
let pendingDownload = { name: "", url: "" };

function confirmDownload(name, url) {
  pendingDownload = { name, url };
  popupText.textContent = `Open Google Drive for ${name}?`;
  popup.style.display = "flex";
}

// Yes → নতুন ট্যাবে Drive লিঙ্ক ওপেন + পপআপ বন্ধ
popupYes.addEventListener("click", () => {
  const { url } = pendingDownload;
  popup.style.display = "none";
  if (url) {
    window.open(url, "_blank");
  }
});

// Cancel → পপআপ বন্ধ
function closePopup() {
  popup.style.display = "none";
}

popupCancel.addEventListener("click", closePopup);

// Esc বা backdrop এ ক্লিক করলে পপআপ বন্ধ
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in-up");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});
