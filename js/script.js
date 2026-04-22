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
  popup.classList.add("active");
}

// Yes → নতুন ট্যাবে Drive লিঙ্ক ওপেন + পপআপ বন্ধ
popupYes.addEventListener("click", () => {
  const { url } = pendingDownload;
  popup.classList.remove("active");
  if (url) {
    window.open(url, "_blank");
  }
});

// Cancel → পপআপ বন্ধ
function closePopup() {
  popup.classList.remove("active");
}

if (popupCancel) popupCancel.addEventListener("click", closePopup);

// Esc বা backdrop এ ক্লিক করলে পপআপ বন্ধ
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
popup.addEventListener("click", (e) => {
  if (e.target === popup) closePopup();
});

// IntersectionObserver for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('animate-active', entry.isIntersecting);
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));