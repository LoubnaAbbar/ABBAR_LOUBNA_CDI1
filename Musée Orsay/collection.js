

const searchUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Van%20Gogh";
const objectUrl = "https://collectionapi.metmuseum.org/public/collection/v1/objects/";

async function fetchVanGoghArtworks() {
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();

    const ids = data.objectIDs.slice(0, 10); // Prends les 10 premières œuvres
    for (const id of ids) {
      const artwork = await fetch(`${objectUrl}${id}`).then(res => res.json());
      displayArtwork(artwork);
    }

  } catch (error) {
    console.error("Erreur lors de la récupération des œuvres :", error);
  }
}

function displayArtwork(artwork) {
  const gallery = document.getElementById("gallery");

  const card = document.createElement("div");
  card.innerHTML = `
    <h3>${artwork.title}</h3>
    <p><strong>Artiste :</strong> ${artwork.artistDisplayName || "Inconnu"}</p>
    <img src="${artwork.primaryImageSmall}" alt="${artwork.title}" width="200" />
  `;

  gallery.appendChild(card);
}

fetchVanGoghArtworks();