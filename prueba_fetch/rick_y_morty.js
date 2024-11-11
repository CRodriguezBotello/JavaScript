// Función para obtener personajes desde la API
function fetchCharacters() {
    const url = 'https://rickandmortyapi.com/api/character';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCharacterImages(data.results);
            // Si hay más páginas, las cargamos automáticamente
            if (data.info.next) {
                fetchMoreCharacters(data.info.next);
            }
        })
        .catch(error => console.error('Error fetching characters:', error));
}

// Función para cargar más personajes si hay más páginas
function fetchMoreCharacters(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayCharacterImages(data.results);
            if (data.info.next) {
                fetchMoreCharacters(data.info.next);
            }
        })
        .catch(error => console.error('Error fetching more characters:', error));
}

// Función para mostrar las imágenes de los personajes
function displayCharacterImages(characters) {
    const imagesContainer = document.getElementById('character-images');
    characters.forEach(character => {
        const imgElement = document.createElement('img');
        imgElement.src = character.image;
        imgElement.alt = character.name;
        imgElement.classList.add('character-image');
        imagesContainer.appendChild(imgElement);
    });
}
