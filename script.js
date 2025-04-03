// Ottiene riferimenti agli elementi HTML tramite i loro ID
let categorySelect = document.getElementById("category");
let jokeText = document.getElementById("joke");
let loadJokeButton = document.getElementById("loadJoke");

// Array contenente tutte le categorie di battute disponibili sull'API
let categoriesList = [
    "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history",
    "money", "movie", "music", "political", "religion", "science", "sport", "travel"
];

// Ciclo che aggiunge dinamicamente tutte le categorie al menu a tendina
categoriesList.forEach(category => {
    // Crea un nuovo elemento option per ogni categoria
    let option = document.createElement("option");
    // Imposta il valore dell'opzione alla categoria
    option.value = category;
    // Imposta il testo visualizzato con la prima lettera maiuscola
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    // Aggiunge l'opzione al menu a tendina
    categorySelect.appendChild(option);
});

// Funzione per caricare una battuta casuale
function loadJoke() {
    // Ottiene la categoria selezionata
    let category = categorySelect.value;
    // Costruisce l'URL dell'API: se è selezionata una categoria la include, altrimenti usa l'URL base
    let url = category ? `https://api.chucknorris.io/jokes/random?category=${category}` : "https://api.chucknorris.io/jokes/random";

    // Effettua la chiamata all'API usando fetch
    fetch(url)
        .then(response => response.json())  // Converte la risposta in formato JSON
        .then(data => {
            // Aggiorna il testo del paragrafo con la battuta ricevuta
            jokeText.textContent = data.value;
        })
    
}

// Aggiunge un event listener al pulsante per eseguire la funzione loadJoke quando viene cliccato
loadJokeButton.addEventListener("click", loadJoke);
