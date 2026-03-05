const DOWNLOAD_URL = "https://github.com/dhruvgupta-og/RGPV-paper-apk/releases/download/v1.0/RGPV.Resources.apk";

const downloadBtn = document.getElementById("downloadBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const downloadNote = document.getElementById("downloadNote");
const downloadNav = document.getElementById("downloadNav");

function getApkUrl() {
  return DOWNLOAD_URL || "";
}

function updateDownloadState() {
  const url = getApkUrl();
  if (!url) {
    downloadBtn.disabled = true;
    downloadNote.textContent = "APK not linked yet. Add the file name in script.js.";
    return;
  }

  downloadBtn.disabled = false;
  downloadBtn.addEventListener("click", () => {
    window.location.href = url;
  });

  if (downloadNav) {
    downloadNav.href = url;
  }

  downloadNote.textContent = "Download link ready.";
}

copyLinkBtn.addEventListener("click", async () => {
  const url = getApkUrl();
  if (!url) {
    alert("APK not linked yet. Update script.js first.");
    return;
  }

  const fullUrl = new URL(url, window.location.href).href;
  try {
    await navigator.clipboard.writeText(fullUrl);
    copyLinkBtn.textContent = "Link Copied";
    setTimeout(() => (copyLinkBtn.textContent = "Copy Download Link"), 1400);
  } catch (err) {
    alert(fullUrl);
  }
});

updateDownloadState();
