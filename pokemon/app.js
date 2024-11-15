/**
 * Ejercicio 1: Buscar y mostrar información del Pokémon con FETCH
 */

/**
 * Función para buscar Pokémon usando Fetch y async/await.
 * Ejercicio 1 y 2.
 */

async function buscarPokemon() {
    // Obtener el valor del input
    const pokemon = document.getElementById('pokemon-input').value.toLowerCase();

    // URL de la API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        // Hacemos la solicitud a la API con fetch y await
        const respuesta = await fetch(url);

        // Verificamos si la respuesta es válida
        if (!respuesta.ok) {
            throw new Error('Pokémon no encontrado');
        }

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // Extraemos la información básica del Pokémon
        const nombre = datos.name;
        const id = datos.id;
        const sprite = datos.sprites.front_default;

        // Mostramos la información en el HTML
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `
            <h2>${nombre.toUpperCase()} (ID: ${id})</h2>
            <img src="${sprite}" alt="${nombre}">
        `;
    } catch (error) {
        // Mostrar mensaje de error en caso de fallo
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p>${error.message}</p>`;
    }
}

/**
 * Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click', buscarPokemon);

/**
 * Ejercicio 3: Buscar Pokémon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX() {
    // Obtener el valor del input
    const pokemon = $('#pokemon-input').val().toLowerCase();

    // URL de la API
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    // Realizar solicitud AJAX con JQuery
    $.ajax({
        url: url,
        method: 'GET',
        success: function (datos) {
            // Extraemos la información básica del Pokémon
            const nombre = datos.name;
            const id = datos.id;
            const sprite = datos.sprites.front_default;

            // Mostramos la información en el HTML usando JQuery
            $('#resultado').html(`
                <h2>${nombre.toUpperCase()} (ID: ${id})</h2>
                <img src="${sprite}" alt="${nombre}">
            `);
        },
        error: function () {
            // Mostrar mensaje de error en caso de fallo
            $('#resultado').html('<p>Pokémon no encontrado</p>');
        }
    });
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX.
 */
$(document).ready(function () {
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
});
