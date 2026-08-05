
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

const clientId = "bfa6d10ccfa946508ae22badd7138b8a";
const redirectUri = "http://127.0.0.1:5500/index.html";

function generateRandomString(length) {
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let text = "";

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

async function generateCodeChallenge(verifier) {

    const data = new TextEncoder().encode(verifier);

    const digest = await window.crypto.subtle.digest("SHA-256", data);

    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

document.getElementById("login").onclick = async () => {

    const verifier = generateRandomString(64);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        scope: "user-read-private user-read-email",
        redirect_uri: redirectUri,
        code_challenge_method: "S256",
        code_challenge: challenge
    });

    window.location =
        "https://accounts.spotify.com/authorize?" + params.toString();
};

const params = new URLSearchParams(window.location.search);

const code = params.get("code");

console.log(code);