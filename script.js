// Optional existing hello button handler (if present)

// "Import new album" button: open a hidden file picker
const newAlbumBtn = document.getElementById("newAlbum");
if (newAlbumBtn) {
    newAlbumBtn.addEventListener("click", () => {
        window.location.href= "importAlbum.html";
    });
}

// "View your rankings" button: placeholder action
const rankingsBtn = document.getElementById("rankings");
if (rankingsBtn) {
    rankingsBtn.addEventListener("click", () => {
        alert("Showing your rankings (placeholder).");
    });
}

// "View hot albums" button: placeholder action
const globalTopTenBtn = document.getElementById("globalTopTen");
if (globalTopTenBtn) {
    globalTopTenBtn.addEventListener("click", () => {
        alert("Showing global top ten albums (placeholder).");
    });
}