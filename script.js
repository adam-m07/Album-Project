document.getElementById("newAlbum").addEventListener("click", () => {
    const search = prompt("Enter album name:");

    // Redirect to search page
    window.location.href = `search.html?q=${search}`;
});

button.addEventListener("click", async () => {
    const search = prompt("Enter album name:");

    const response = await fetch(`http://localhost:3000/search?q=${search}`);
    const data = await response.json();

    const album = data.albums.items[0];

    if (!album) {
        alert("No album found!");
        return;
    }

    displayAlbum(album);
});

function displayAlbum(album) {
    const container = document.createElement("div");

    const img = document.createElement("img");
    img.src = album.images[0].url;
    img.width = 200;

    const title = document.createElement("h2");
    title.textContent = album.name;

    const artist = document.createElement("p");
    artist.textContent = "Artist: " + album.artists[0].name;

    const year = document.createElement("p");
    year.textContent = "Year: " + album.release_date;

    container.appendChild(img);
    container.appendChild(title);
    container.appendChild(artist);
    container.appendChild(year);

    document.body.appendChild(container);
}